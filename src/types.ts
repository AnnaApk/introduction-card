export type Language = 'en' | 'es';

export interface FamilyInfo {
  name: string;
  role: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

export interface Document {
  title: string;
  url: string;
}