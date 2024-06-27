import { Router } from 'express';
import CarController from '../controllers/cars.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', auth, CarController.index);
router.post('/', auth, CarController.store);
router.get('/:id', CarController.show);
router.put('/:id', auth, CarController.update);
router.delete('/:id', CarController.destroy);

export default router;
