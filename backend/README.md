# Backend (OVC)

This is a minimal Express + TypeScript starter for the OVC backend.

Setup

```bash
cd backend
npm install
cp .env.example .env
# edit .env to set DATABASE_URL, JWT_SECRET, PAYSTACK_SECRET
npm run dev
```

Scripts
- `npm run dev` — runs with `ts-node-dev` for fast dev
- `npm run build` — compiles to `dist`
- `npm start` — runs compiled `dist` bundle

Next tasks
- Add DB models, migrations (Postgres)
- Implement Paystack webhook endpoint and payment verification
- Implement ticket and QR services

