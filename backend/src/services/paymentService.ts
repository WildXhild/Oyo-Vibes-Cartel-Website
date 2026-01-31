import crypto from 'crypto';

const verifyPaystackSignature = (rawBody: string, signatureHeader?: string | string[] | null) => {
  const secret = process.env.PAYSTACK_SECRET || '';
  if (!signatureHeader || typeof signatureHeader !== 'string') return false;
  const hash = crypto.createHmac('sha512', secret).update(rawBody).digest('hex');
  return hash === signatureHeader;
};

export default {
  verifyPaystackSignature,
};
