import { Router } from 'express';
import emailRouter from './email';

let router = Router();

router.use('/member', emailRouter);

export default router;