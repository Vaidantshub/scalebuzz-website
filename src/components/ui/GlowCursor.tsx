"use client";

import { useEffect, useRef } from "react";
import "./GlowCursor.css";

interface GlowCursorProps {
  color?: string;
  secondaryColor?: string;
  trailLength?: number;
  trailWidth?: number;
  trailTaper?: number;
  followSpeed?: number;
  glowIntensity?: number;
  glowSpread?: number;
  hotspot?: number;
  brightness?: number;
  opacity?: number;
  pulseSpeed?: number;
  noiseStrength?: number;
  idleFade?: boolean;
  idleTimeout?: number;
  fadeDuration?: number;
  blendMode?: string;
  children?: React.ReactNode;
}

export default function GlowCursor({
  color = "#67E8F9",
  secondaryColor = "#A78BFA",
  trailLength = 40,
  trailWidth = 8,
  trailTaper = 0.8,
  followSpeed = 0.16,
  glowIntensity = 1.9,
  glowSpread = 1.2,
  hotspot = 0.65,
  brightness = 1.25,
  opacity = 1,
  pulseSpeed = 1.1,
  noiseStrength = 0.035,
  idleFade = true,
  idleTimeout = 700,
  fadeDuration = 900,
  blendMode = "screen",
  children,
}: GlowCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({
    mouse: { x: -1000, y: -1000 },
    smoothMouse: { x: -1000, y: -1000 },
    trail: [] as { x: number; y: number }[],
    idle: false,
    fadeOpacity: 1,
    lastMove: Date.now(),
    fadingOut: false,
    fadeStart: 0,
    pulseTime: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      stateRef.current.mouse.x = e.clientX;
      stateRef.current.mouse.y = e.clientY;
      stateRef.current.lastMove = Date.now();
      if (stateRef.current.fadingOut) {
        stateRef.current.fadingOut = false;
        stateRef.current.fadeOpacity = 1;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 103, g: 232, b: 249 };
    };

    const primaryRgb = hexToRgb(color);
    const secondaryRgb = hexToRgb(secondaryColor);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      const s = stateRef.current;
      const now = Date.now();

      if (idleFade && !s.fadingOut && now - s.lastMove > idleTimeout) {
        s.fadingOut = true;
        s.fadeStart = now;
      }
      if (s.fadingOut) {
        const elapsed = now - s.fadeStart;
        s.fadeOpacity = Math.max(0, 1 - elapsed / fadeDuration);
      }

      s.smoothMouse.x = lerp(s.smoothMouse.x, s.mouse.x, followSpeed);
      s.smoothMouse.y = lerp(s.smoothMouse.y, s.mouse.y, followSpeed);

      s.trail.unshift({ x: s.smoothMouse.x, y: s.smoothMouse.y });
      if (s.trail.length > trailLength) s.trail.length = trailLength;

      s.pulseTime += 0.016 * pulseSpeed;
      const pulse = 1 + 0.08 * Math.sin(s.pulseTime * Math.PI * 2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (s.trail.length < 2 || s.fadeOpacity <= 0) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.save();
      ctx.globalCompositeOperation = blendMode as GlobalCompositeOperation;
      ctx.globalAlpha = s.fadeOpacity * opacity;

      for (let i = 0; i < s.trail.length - 1; i++) {
        const t = 1 - i / (s.trail.length - 1);
        const taper = Math.pow(t, trailTaper);
        const width = trailWidth * taper * pulse;

        const ratio = i / (s.trail.length - 1);
        const r = Math.round(lerp(primaryRgb.r, secondaryRgb.r, ratio));
        const g = Math.round(lerp(primaryRgb.g, secondaryRgb.g, ratio));
        const b = Math.round(lerp(primaryRgb.b, secondaryRgb.b, ratio));

        const nx = (Math.random() - 0.5) * noiseStrength * width;
        const ny = (Math.random() - 0.5) * noiseStrength * width;

        const p1 = s.trail[i];
        const p2 = s.trail[i + 1];

        const glowLayers = [
          { blur: width * glowSpread * 3, alpha: 0.08 * glowIntensity },
          { blur: width * glowSpread * 1.5, alpha: 0.18 * glowIntensity },
          { blur: width * glowSpread * 0.6, alpha: 0.4 * glowIntensity },
        ];

        for (const layer of glowLayers) {
          ctx.save();
          ctx.shadowBlur = layer.blur;
          ctx.shadowColor = `rgba(${r},${g},${b},${layer.alpha})`;
          ctx.strokeStyle = `rgba(${r},${g},${b},${t * layer.alpha * 2})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.beginPath();
          ctx.moveTo(p1.x + nx, p1.y + ny);
          ctx.lineTo(p2.x + nx, p2.y + ny);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.strokeStyle = `rgba(${r},${g},${b},${t * hotspot * brightness})`;
        ctx.lineWidth = width * 0.35;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      }

      if (s.trail.length > 0) {
        const tip = s.trail[0];
        const grad = ctx.createRadialGradient(
          tip.x, tip.y, 0,
          tip.x, tip.y, trailWidth * 2 * pulse
        );
        grad.addColorStop(0, `rgba(${primaryRgb.r},${primaryRgb.g},${primaryRgb.b},${hotspot * brightness * 0.9})`);
        grad.addColorStop(0.4, `rgba(${primaryRgb.r},${primaryRgb.g},${primaryRgb.b},${0.3 * glowIntensity})`);
        grad.addColorStop(1, `rgba(${primaryRgb.r},${primaryRgb.g},${primaryRgb.b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, trailWidth * 2.5 * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [color, secondaryColor, trailLength, trailWidth, trailTaper, followSpeed,
      glowIntensity, glowSpread, hotspot, brightness, opacity, pulseSpeed,
      noiseStrength, idleFade, idleTimeout, fadeDuration, blendMode]);

  return (
    <div ref={containerRef} className="glow-cursor-container">
      <canvas ref={canvasRef} aria-hidden="true" />
      {children}
    </div>
  );
}
