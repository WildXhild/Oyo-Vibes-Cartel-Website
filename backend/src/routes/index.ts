import { Router } from 'express';
import healthController from '../controllers/healthController';
import paymentRoutes from './paymentRoutes';

const router = Router();

router.get('/health', healthController);

// payment webhook and payment-related routes
router.use('/payments', paymentRoutes);

// placeholder route groups
router.get('/', (req, res) => res.json({ message: 'OVC API root' }));

export default router;
