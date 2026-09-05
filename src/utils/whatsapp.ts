export const WHATSAPP_NUMBER = '919873764268';
export const WHATSAPP_DISPLAY = '+91 9873764268';
export const EMAIL_ADDRESS = 'scalebuzzz@gmail.com';
export const INSTAGRAM_HANDLE = '@_scalebuzz_';
export const INSTAGRAM_URL = 'https://instagram.com/_scalebuzz_';

export interface WhatsAppInquiryDetails {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  details?: string;
}

export const openWhatsAppInquiry = (info?: WhatsAppInquiryDetails) => {
  let message = `*ScaleBuzz Project Inquiry* 🚀\n`;
  if (info?.name) message += `\n👤 *Name:* ${info.name}`;
  if (info?.email) message += `\n✉️ *Email:* ${info.email}`;
  if (info?.company) message += `\n🏢 *Company:* ${info.company}`;
  if (info?.projectType) message += `\n📌 *Project Type:* ${info.projectType}`;
  if (info?.budget) message += `\n💰 *Estimated Budget:* ${info.budget}`;
  if (info?.details) message += `\n📝 *Details:* ${info.details}`;

  if (!info || Object.keys(info).length === 0) {
    message = `Hi ScaleBuzz! I visited your website and would like to get started on a project with you.`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
