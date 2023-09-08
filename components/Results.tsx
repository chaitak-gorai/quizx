'use client'

import { pusherClient } from '@/lib/pusher'
import { toPusherKey } from '@/lib/utils'
import { useQuizConfig } from '@/store'
import { Player } from '@lottiefiles/react-lottie-player'
import { type } from 'os'
import { FC, ReactNode, useEffect } from 'react'
import Score from './Score'



const Results = () => {
  const config = useQuizConfig((state: any) => state.config)
  const setOppScore = useQuizConfig((state: any) => state.setOppScore)
  const setOppAttempted = useQuizConfig((state: any) => state.setOppAttempted)

  return (
    <>
      <Player
        src='https://assets6.lottiefiles.com/packages/lf20_touohxv0.json'
        className='player'
        loop
        autoplay
        style={{ height: '400px', width: '400px' }}
      />
     
      {config.score > config.oppScore ? (
        <>
          <h1 className='mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            YOU WON :{' '}
            <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
              {config.score}
            </span>
          </h1>

          <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
            Opponent Score:
            {config.oppScore}
          </span>
        </>
      ) : (
        <>
          <h1 className='mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Opponent Won :{' '}
            <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
              {config.oppScore}
            </span>
          </h1>

          <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
            Your Score:
            {config.score}
          </span>
        </>
      )}
    </>
  )
}

export default Results
