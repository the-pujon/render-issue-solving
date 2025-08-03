import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

const users = [
  { id: 1, name: 'Lipon Roy' },
  { id: 2, name: 'Jane Doe' },
];

router.get('/', (_req:Request, res:Response) => {
  res.json(users);
});

export default router;
