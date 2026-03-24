export interface VendorRegistration {
  id?: string;
  business_name: string;
  contact_person_name: string;
  mobile_number: string;
  email: string;
  business_type: 'Factory' | 'Wholesaler' | 'Shop';
  product_categories: string;
  location: string;
  additional_info?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}
