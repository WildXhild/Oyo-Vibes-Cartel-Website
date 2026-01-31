# Oyo Vibes Cartel (OVC)

Starter scaffold for OVC — Next.js frontend and Express (TypeScript) backend.

Overview
- Frontend: Next.js + TypeScript
- Backend: Node.js + Express + TypeScript
- DB: PostgreSQL (not included in scaffold)

Quick start

1) Backend

```bash
cd backend
npm install
cp .env.example .env
# set values in .env
npm run dev
```

2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Environment
- Create a PostgreSQL instance and set `DATABASE_URL` in backend `.env`.
- Add `JWT_SECRET` and `PAYSTACK_SECRET` to backend `.env`.

Next steps
- Hook Paystack webhook to `POST /api/payments/webhook` (backend)
- Implement ticket model, QR generation, and verification endpoints
- Add CI, Docker, and deployment configs

