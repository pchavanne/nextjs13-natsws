'use client'

import { useNats, useNatsSubscribe } from '@/hooks/use-nats'
import { StringCodec } from 'nats.ws'

const sc = StringCodec()

interface NatsPageProps {
  servers: string
  subject?: string
}

export default function NatsPage({ servers, subject = '>' }: NatsPageProps) {
  const nats = useNats(servers)
  const { lastMsg, msgs } = useNatsSubscribe(nats, subject)

  return (
    <div className="flex flex-col items-center p-2 gap-1">
      <h2>Nats Page</h2>
      {nats ? <p>Connected</p> : <p> Not Connected</p>}
      {lastMsg ? (
        <p>{`Last Message - subject: ${lastMsg.subject} - message: ${sc.decode(lastMsg.data)} `}</p>
      ) : (
        <p> No Last message </p>
      )}
      {msgs ? msgs.map((msg) => <p>{`Msg - subject: ${msg.subject} - message: ${sc.decode(msg.data)} `}</p>) : <></>}
    </div>
  )
}
