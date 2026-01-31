import { Request, Response } from 'express';

export default function healthController(req: Request, res: Response) {
  res.json({ status: 'ok', time: new Date().toISOString() });
}
