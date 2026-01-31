import qrcode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import ticketModel from '../models/ticketModel';

const generateQrForTicket = async (ticketId: string) => {
  // token stored server-side to prevent tampering
  const token = uuidv4();
  await ticketModel.setQrToken(ticketId, token);

  // create a short payload (could be just the token)
  const payload = JSON.stringify({ t: token, i: ticketId });
  const dataUrl = await qrcode.toDataURL(payload);
  return { token, dataUrl };
};

export default { generateQrForTicket };
