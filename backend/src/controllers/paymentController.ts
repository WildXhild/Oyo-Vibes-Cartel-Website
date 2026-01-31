import { Request, Response } from 'express';
import paymentService from '../services/paymentService';
import ticketModel from '../models/ticketModel';
import qrService from '../services/qrService';

export const webhook = async (req: Request, res: Response) => {
  try {
    const signature = req.headers['x-paystack-signature'];
    const raw = (req as any).rawBody || JSON.stringify(req.body);

    if (!paymentService.verifyPaystackSignature(raw, signature)) {
      return res.status(400).send('Invalid signature');
    }

    const event = JSON.parse(raw);
    const eventName = event.event || event.type || '';

    if (eventName === 'charge.success' || eventName === 'payment.success') {
      const reference = event.data?.reference || event.data?.reference;
      if (!reference) {
        return res.status(200).send('no reference');
      }

      const ticket = await ticketModel.findByPaystackReference(reference);
      if (!ticket) {
        return res.status(200).send('no-ticket');
      }

      // mark ticket as paid
      await ticketModel.markPaid(ticket.id);

      // generate QR token and data URL
      await qrService.generateQrForTicket(ticket.id);

      return res.status(200).send('ok');
    }

    // unhandled events
    return res.status(200).send('event ignored');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('webhook error', err);
    return res.status(500).send('server error');
  }
};

export default { webhook };
