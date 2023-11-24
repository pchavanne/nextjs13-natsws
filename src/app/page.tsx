import NatsPage from '@/components/nats'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home Page</h1>
      <NatsPage servers={process.env.NATS_SERVERS!} />
    </main>
  )
}
