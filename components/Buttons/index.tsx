"use client";
import React from "react";
import { useQuizConfig } from "@/store";
import axios from "axios";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

export default function Button() {
  const changeStatus = useQuizConfig((state:any) => state.changeStatus);
  const addUserId = useQuizConfig((state:any) => state.addUserId);
  const addQuizId = useQuizConfig((state:any) => state.addQuizId);
 const config = useQuizConfig((state:any) => state.config);
  const addQuizPartner = useQuizConfig((state: any) => state.addQuizPartner)

  async function sentUserId(userId:string,quizId:string) {
    const data = await axios.post('/api/joined', {
        userId: userId,
        quizId: quizId,
      })
      console.log(data)

  }
const handleJoin = () => {

 
  var quizId = config.quizId
  if (quizId === '') {
    const toastId=toast.error('Please enter quizId')
  } else {
      changeStatus('start')
       const userId = nanoid()
       console.log(userId, 'usreid')
       addUserId(userId)
    addQuizPartner(quizId.split('--')[1])
    sentUserId(userId, quizId)
  }
  
}
const handleCreate = () => {
  changeStatus("start")
    const userId = nanoid()
    console.log(userId, 'usreid')
    addUserId(userId)
  const quizId = `quiz--${userId}`
  addQuizId(quizId)
  sentUserId(userId, quizId)
}
  return (
    <>
      <button
        onClick={handleJoin}
        type='button'
        className='  m-auto  text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 py-4 px-10 w-1/2  '
      >
        Join Quiz
      </button>
      <button
     
        onClick={handleCreate}
        type='button'
        className='  m-auto  text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 py-4 px-10 w-1/2  '
      >
        Create Quiz
      </button>
    </>
  )
}
