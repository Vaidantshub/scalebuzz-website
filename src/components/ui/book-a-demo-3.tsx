"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Brand Logo SVGs for high-fidelity rendering without external non-standard dependencies
const OpenAI = ({ size = 100 }: { type?: string; size?: number }) => (
  <div style={{ width: size }} className="flex items-center gap-2 text-zinc-300 font-bold font-mono text-xs tracking-tight opacity-80 hover:opacity-100 transition-opacity">
    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.535-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3423 9.717a4.4755 4.4755 0 0 1 2.3655-1.9728V13.26a.7854.7854 0 0 0 .388.6766l5.8144 3.3543-2.0201 1.1686a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.4997 4.4997 0 0 1 2.3423 9.717zm16.8663 3.0374-5.838-3.3685 2.02-1.1686a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4068-.6812zm2.0107-3.0231-.142-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7806 0L9.6804 10.256V7.9236a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7866a4.4997 4.4997 0 0 1 6.6802 4.6626zM8.3061 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.052V6.0646a4.4944 4.4944 0 0 1 7.3757-3.4537l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7321zm1.0125-2.1242 2.682-1.5476 2.682 1.5476v3.0952l-2.682 1.5476-2.682-1.5476z"/>
    </svg>
    OpenAI
  </div>
);

const ClaudeAI = ({ size = 100 }: { type?: string; size?: number }) => (
  <div style={{ width: size }} className="flex items-center gap-1.5 text-zinc-300 font-bold font-sans text-xs tracking-tight opacity-80 hover:opacity-100 transition-opacity">
    <span className="w-2 h-2 rounded-full bg-zinc-300 inline-block" />
    Claude AI
  </div>
);

const Replicate = ({ size = 100 }: { type?: string; size?: number }) => (
  <div style={{ width: size }} className="flex items-center gap-1.5 text-zinc-300 font-mono text-xs tracking-wider opacity-80 hover:opacity-100 transition-opacity">
    <span className="font-extrabold text-white">REPLICATE</span>
  </div>
);

const Cursor = ({ size = 100 }: { type?: string; size?: number }) => (
  <div style={{ width: size }} className="flex items-center gap-1.5 text-zinc-300 font-mono text-xs tracking-wider opacity-80 hover:opacity-100 transition-opacity">
    <span>CURSOR</span>
  </div>
);

const Gemini = ({ size = 90 }: { type?: string; size?: number }) => (
  <div style={{ width: size }} className="flex items-center gap-1.5 text-zinc-300 font-sans text-xs tracking-tight opacity-80 hover:opacity-100 transition-opacity">
    <span className="font-semibold text-zinc-200">Gemini</span>
  </div>
);

const Github = ({ size = 90 }: { type?: string; size?: number }) => (
  <div style={{ width: size }} className="flex items-center gap-1.5 text-zinc-300 font-bold font-sans text-xs opacity-80 hover:opacity-100 transition-opacity">
    <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    GitHub
  </div>
);

import { openWhatsAppInquiry, WHATSAPP_DISPLAY } from "@/utils/whatsapp";

const Bookademo3 = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [teamSize, setTeamSize] = React.useState("");
  const [details, setDetails] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    openWhatsAppInquiry({
      name,
      email,
      company: company ? `${company} (Team: ${teamSize})` : teamSize,
      details,
      projectType: 'Design Consultation'
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 md:py-32 bg-transparent text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid w-full lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Vision & Trust Badges */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h1 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-light">
                <span className="cursor-pointer hover:underline text-white font-semibold">CONTACT</span> / DESIGN CONSULTATION
              </h1>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.98]">
                Let&apos;s Design Together
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 text-white h-7 w-7 rounded-full flex items-center justify-center p-1 border border-white/20">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base text-zinc-300 font-sans">
                    Share your design vision and project goals
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 text-white h-7 w-7 rounded-full flex items-center justify-center p-1 border border-white/20">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base text-zinc-300 font-sans">
                    Experience a tailored design demo & architecture audit
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 text-white h-7 w-7 rounded-full flex items-center justify-center p-1 border border-white/20">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base text-zinc-300 font-sans">
                    Discover premium, high-conversion design solutions
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  TRUSTED BY 10,000+ DESIGNERS AND CREATIVE LEADERS
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center py-2">
                  <OpenAI type="wordmark" size={100} />
                  <ClaudeAI type="wordmark" size={100} />
                  <Replicate type="wordmark" size={100} />
                  <Cursor type="wordmark" size={100} />
                  <Gemini type="wordmark" size={90} />
                  <Github type="wordmark" size={90} />
                </div>
              </div>
            </div>

            {/* Design FAQ & Support Info */}
            <div className="pt-6 border-t border-white/10 grid gap-6 md:grid-cols-3 text-zinc-300">
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white">Design FAQ</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Explore our <span className="underline text-white cursor-pointer">Frequently Asked Questions</span> about design services.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white">Creative Support</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Get inspiration and guidance from our leaders in our <span className="underline text-white cursor-pointer">Design Hub.</span>
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white">Account Support</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <span className="underline text-white cursor-pointer">Reach out</span> for direct client support and billing inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-6 border border-white/15 bg-[#121215] p-8 sm:p-10 rounded-md shadow-2xl">
              {submitted && (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-sm text-emerald-200 text-xs font-mono flex items-center gap-2 mb-4">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Your consultation request has been prepared and sent to WhatsApp ({WHATSAPP_DISPLAY})!
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="mt-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>Work Email</Label>
                  <Input
                    type="email"
                    placeholder="contact@scalebuzz.dev"
                    className="mt-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>Studio / Company Name</Label>
                  <Input
                    type="text"
                    placeholder="Your design studio"
                    className="mt-2"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>Team Size</Label>
                  <Select onValueChange={(val) => setTeamSize(val)} required>
                    <SelectTrigger className="mt-2 w-full">
                      <SelectValue placeholder="Number of designers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10 designers">1-10 designers</SelectItem>
                      <SelectItem value="11-50 designers">11-50 designers</SelectItem>
                      <SelectItem value="51-200 designers">51-200 designers</SelectItem>
                      <SelectItem value="200+ designers">200+ designers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Project Details (Optional)</Label>
                <Textarea
                  placeholder="Tell us about your design project..."
                  className="mt-2 h-24"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>

              <Button className="w-full h-12 text-xs font-mono uppercase tracking-wider font-bold bg-emerald-600 hover:bg-emerald-500 text-white">
                Connect via WhatsApp (+91 9873764268)
              </Button>

              <div className="flex space-x-2 pt-2">
                <p className="text-zinc-500 text-[11px] leading-relaxed">
                  By submitting this form, you confirm that you have read and
                  understood our{" "}
                  <span className="underline text-zinc-300 cursor-pointer">Privacy Policy.</span> Direct WhatsApp inquiry will open automatically.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Bookademo3 };
