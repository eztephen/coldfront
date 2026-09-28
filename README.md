# Coldfront Aircon & Electrical

**Live:** https://coldfront.vercel.app

Sample website for an aircon and electrical trade business — lead-capture led, with a quote form above the fold, a live service-area checker, published pricing and tap-to-call on mobile. Built as a portfolio piece to show prospective trade clients.

Next.js 16, React 19, Tailwind CSS v4, TypeScript.

## Getting started

Requires Node.js >= 20.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Try `Northgate` or `4012` in the suburb checker.

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Setting it up for a real trade business

1. **`src/config/site.ts`** — business name, phone, email, address, licence numbers, callback promise.
2. **`src/data/content.ts`** — every heading, service, price, review and step. Wrap words in `*asterisks*` to put them on the hi-vis highlight.
3. **`SERVICE_AREAS` and `SERVICE_POSTCODES`** in the same file — the suburbs and postcodes the checker accepts, each with its next standard slot. This is the feature that sells trade clients, so fill it with their real run.
4. **`src/app/globals.css`** — brand colours at the top. `--hivis` is the accent; swap it for the client's van livery colour.
5. **`src/app/icon.svg`** — favicon.
6. **Licence numbers** — the footer shows placeholders. Replace them with the client's real ones before launch; they are a legal requirement in many places, not decoration.

## Quote form

The form confirms in place and sends nothing. Before launch, POST it to a route handler that emails or texts the office — `pzaideletrato/src/app/api/contact/route.ts` has the nodemailer pattern. For trades, an SMS to the owner's phone usually converts better than an email.

## Deploy

Push to a Git host and import the repo on [Vercel](https://vercel.com/new).
