import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface SoftwareFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageUrl?: string;
}

export interface SoftwareSolution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: SoftwareFeature[];
  logoText: string;
  color: string;
  isNew?: boolean;
  logoUrl: string;
  partnerLogoUrl?: string;
  partnerLogos?: string[];
  websiteUrl: string;
  interfaceMedia?: {
    type: 'image' | 'video';
    url: string;
  };
}

export interface HardwareItem {
  id: string;
  title: string;
  description: string;
  category: 'Terminal' | 'Peripheral' | 'Accessory' | 'Register' | 'Scale';
  imageUrl: string;
  images?: string[];
}

export interface PaymentProvider {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  features: string[];
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}