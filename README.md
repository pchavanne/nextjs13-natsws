# Next.js 13 - Nats WebSocket Integration

This [Next.js](https://nextjs.org/) project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and aims to integrate [Nats Websocket](https://github.com/nats-io/nats.ws) with [Next.js 13](https://nextjs.org/).

## Getting Started

Before running this project, make sure you have a working NATS server and set up the required environment variables.

### Configuring Environment Variables

Create a `.env` file in the root of your project with the following content:

```env
NATS_SERVERS=<your_nats_server_address>
```

Then, run the preview server:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
# or
bun preview
```

:warning: If you run the **dev server** you will [receive every message twice](https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start sending messages with [Nats CLI](https://github.com/nats-io/natscli)

```bash
nats pub foo "Message N°{{.Count}} on foo" --count=10 --sleep=250ms &
nats pub bar "Message N°{{.Count}} on bar" --count=10 --sleep=250ms &
```
