'use client'

import { pusherClient } from '@/lib/pusher'
import { toPusherKey } from '@/lib/utils'
import { useQuizConfig } from '@/store'
import { type } from 'os'
import { FC, ReactNode, useEffect } from 'react'

type ScoreProps = {
    score: number
    attempted: number
    }

const Score = () => {
  const config = useQuizConfig((state: any) => state.config)
   const setOppScore = useQuizConfig((state: any) => state.setOppScore);
  const setOppAttempted = useQuizConfig((state: any) => state.setOppAttempted);
  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`score:${config.quizPartner}`))

    const scoreHandler = (data: ScoreProps ) => {
    
     
        setOppScore(data.score)
        setOppAttempted(data.attempted)

    }

    pusherClient.bind('score', scoreHandler)

    return () => {
      pusherClient.unsubscribe(toPusherKey(config.quizId))
      pusherClient.unbind('score', scoreHandler)
    }
  }, [!config.quizPartner])

  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col items-center justify-center border-black border-r-4 p-2'>
          <h3 className='mb-4  font-extrabold leading-none tracking-tight text-green-500  dark:text-white'>
            You:
          </h3>

          <p className='text-2xl '> Score: {config.score}</p>
          <p className='text-2xl '>
            Attempted: {config.attempted} / {config.numberOfQuestion}
          </p>
        </div>
        
        <div className='flex flex-col items-center justify-center p-2'>
          <h3 className='mb-4  font-extrabold leading-none tracking-tight text-red-500  dark:text-white'>
            Opponent:
          </h3>
          <p className='text-2xl '> Score: {config.oppScore}</p>
          <p className='text-2xl '>
             Attempted: {config.oppAttempted} /{' '}
            {config.numberOfQuestion}
          </p>
        </div>
      </div>
    </>
  )
}

export default Score
