export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  iconName: string;
  detailedDescription: string;
  detailedDescriptionEn: string;
  estimatedCostRange: string;
}

export interface Testimonial {
  id: string;
  text: string;
  textEn: string;
  author: string;
  role: string;
  roleEn: string;
  location: string;
  avatarUrl: string;
  rating: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  imageUrl: string;
  description: string;
  descriptionEn: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceId?: string;
  timestamp: string;
  status: 'pending' | 'resolved';
}

export interface EstimationRequest {
  propertyType: 'apartment' | 'condo' | 'commercial' | 'industrial';
  areaSize: number; // in square meters
  servicesSelected: string[]; // service IDs
  urgency: 'routine' | 'urgent' | 'emergency';
  name: string;
  email: string;
  phone: string;
}

export interface EstimationResult {
  estimatedMin: number;
  estimatedMax: number;
  breakdown: { serviceName: string; cost: number }[];
  currency: 'AOA' | 'USD';
}
