'use client'


import { pusherClient } from '@/lib/pusher'
import { toPusherKey } from '@/lib/utils'
import { useQuizConfig } from '@/store'
import { FC, ReactNode, useEffect } from 'react'




const QuizInfo = () => {
    const config = useQuizConfig((state: any) => state.config)
      const addQuizPartner = useQuizConfig((state: any) => state.addQuizPartner)
       useEffect(() => {
         pusherClient.subscribe(toPusherKey(config.quizId))

         const joinedHandler = (userId: string) => {
           console.log('user joined', userId)
           if(!config.quizPartner){
            addQuizPartner(userId)
           }
           
         }

         pusherClient.bind('user-joined', joinedHandler)

         return () => {
           pusherClient.unsubscribe(toPusherKey(config.quizId))
           pusherClient.unbind('user-joined', joinedHandler)
         }
       }, [!config.quizPartner])
      
  return (
    <>
      {config.quizId && (
        <>
          <h3 className='mb-4  font-extrabold leading-none tracking-tight text-gray-900  dark:text-white'>
            Quiz Id:{' '}
            <span className='text-blue-600 dark:text-blue-500'>
              {config.quizId}
            </span>
          </h3>
          <h3 className='mb-4  font-extrabold leading-none tracking-tight text-gray-900  dark:text-white'>
            Partner Id:{' '}
            <span className='text-blue-600 dark:text-blue-500'>
              {config.quizPartner}
            </span>
          </h3>
        </>
      )}
    </>
  )
}

export default QuizInfo
