
import axios from 'axios';

export interface InquiryData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  country?: string;
  productInterest?: string;
  quantityRequired?: string;
  source?: string;
  honeypot?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  productType?: string;
  quantity?: string;
  estimatedBudget?: string;
  additionalDetails?: string;
}

const rawBaseUrl = (import.meta as ImportMeta & { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL || 'https://backend.srmglobalhub.com';
const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const submitInquiry = async (data: InquiryData) => {
  const normalizedName = data.name?.trim() || [data.firstName, data.lastName, data.fullName].filter(Boolean).join(' ').trim() || 'Unknown Lead';
  const payload = {
    ...data,
    name: normalizedName,
    fullName: data.fullName || normalizedName,
    company: data.company || '',
    email: data.email || '',
    phone: data.phone || '',
    message: data.message || data.additionalDetails || '',
    country: data.country || 'India',
    productInterest: data.productInterest || data.productType || '',
    quantityRequired: data.quantityRequired || data.quantity || '',
    productType: data.productType || data.productInterest || '',
    quantity: data.quantity || data.quantityRequired || '',
    estimatedBudget: data.estimatedBudget || '',
    additionalDetails: data.additionalDetails || data.message || '',
    source: data.source || 'contact-form'
  };

  const response = await api.post('/api/leads', payload);
  return response.data;
};

export const adminLogin = async (email: string, password: string) => {
  const response = await api.post('/api/admin/login', { email, password });
  return response.data;
};

export const getAdminLeads = async (token: string) => {
  const response = await api.get('/api/admin/leads', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const updateAdminLead = async (id: string, status: string, token: string) => {
  const response = await api.patch(`/api/admin/leads/${id}`, { status }, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const deleteAdminLead = async (id: string, token: string) => {
  const response = await api.delete(`/api/admin/leads/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
