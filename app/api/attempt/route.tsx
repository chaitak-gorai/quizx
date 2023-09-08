import { pusherServer } from '@/lib/pusher'
import { toPusherKey } from '@/lib/utils'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userId, score,attempted } = body
    
  
  
    console.log(userId, score,attempted)
    await pusherServer.trigger(toPusherKey(`score:${userId}`), 'score', {score,attempted})

    return new Response('ok')
  } catch (e) {
    console.log(e)
    return new Response('error', { status: 500 })
  }
}
