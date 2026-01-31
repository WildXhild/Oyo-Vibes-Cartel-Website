import pool from '../db';

export type Ticket = {
  id: string;
  event_id: string | null;
  user_id: string | null;
  type: string | null;
  price: number | null;
  quantity: number | null;
  status: string;
  paystack_reference: string | null;
  qr_token: string | null;
  created_at: string;
};

const findByPaystackReference = async (reference: string) => {
  const res = await pool.query('SELECT * FROM tickets WHERE paystack_reference = $1 LIMIT 1', [reference]);
  return res.rows[0] as Ticket | undefined;
};

const findById = async (id: string) => {
  const res = await pool.query('SELECT * FROM tickets WHERE id = $1 LIMIT 1', [id]);
  return res.rows[0] as Ticket | undefined;
};

const markPaid = async (id: string) => {
  const res = await pool.query('UPDATE tickets SET status = $1, updated_at = now() WHERE id = $2 RETURNING *', ['paid', id]);
  return res.rows[0] as Ticket;
};

const setQrToken = async (id: string, token: string) => {
  const res = await pool.query('UPDATE tickets SET qr_token = $1, updated_at = now() WHERE id = $2 RETURNING *', [token, id]);
  return res.rows[0] as Ticket;
};

const markUsed = async (id: string) => {
  const res = await pool.query('UPDATE tickets SET status = $1, used_at = now() WHERE id = $2 RETURNING *', ['used', id]);
  return res.rows[0] as Ticket;
};

export default {
  findByPaystackReference,
  findById,
  markPaid,
  setQrToken,
  markUsed,
};
