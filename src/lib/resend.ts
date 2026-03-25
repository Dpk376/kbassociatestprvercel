import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY || 're_placeholder';

if (!process.env.RESEND_API_KEY && process.env.NODE_ENV === 'production') {
  console.warn('RESEND_API_KEY is not defined in production. Email functionality will fail.');
}

export const resend = new Resend(apiKey);
