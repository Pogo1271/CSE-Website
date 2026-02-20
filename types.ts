import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface SoftwareFeature {
  title: string;
  description: string;
  icon: LucideIcon;
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
  websiteUrl: string;
}

export interface HardwareItem {
  id: string;
  title: string;
  description: string;
  category: 'Terminal' | 'Peripheral' | 'Accessory';
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}