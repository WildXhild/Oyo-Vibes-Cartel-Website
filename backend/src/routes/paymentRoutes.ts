import { Router } from 'express';
import paymentController from '../controllers/paymentController';

const router = Router();

// Paystack webhook endpoint. Paystack sends a POST with JSON body.
router.post('/webhook', paymentController.webhook);

export default router;
