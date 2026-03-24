import { supabase } from './supabase';
import type { VendorRegistration } from '@/types/types';

export const vendorApi = {
  // Create a new vendor registration
  async createVendorRegistration(data: Omit<VendorRegistration, 'id' | 'created_at' | 'updated_at'>) {
    const { data: result, error } = await supabase
      .from('vendor_registrations')
      .insert([data])
      .select()
      .maybeSingle();

    if (error) throw error;
    return result;
  },

  // Get all vendor registrations (for admin use)
  async getAllVendorRegistrations() {
    const { data, error } = await supabase
      .from('vendor_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  // Get vendor registration by ID
  async getVendorRegistrationById(id: string) {
    const { data, error } = await supabase
      .from('vendor_registrations')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data;
  }
};
