import { Router } from 'express';
import emailRouter from './email';
import calendarRouter from './calendar2';
import photoRouter from './photos';

let router = Router();

router.use('/member', emailRouter);
router.use('/calendar', calendarRouter);
router.use('/photos', photoRouter)

export default router;