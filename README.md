# Next.js 13 - Nats WebSocket Integration

This [Next.js](https://nextjs.org/) project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and aims to integrate [Nats Websocket](https://github.com/nats-io/nats.ws) with [Next.js 13](https://nextjs.org/).


## Getting Started

Before running this project, make sure you have a working NATS server and set up the required environment variables.

### Configuring Environment Variables

Create a `.env` file in the root of your project with the following content:

```env
NATS_SERVERS=<your_nats_server_address>
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
