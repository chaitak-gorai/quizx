import { create } from 'zustand'

export type configType = {
    numberOfQuestion:number,
    quizId:string,
    userId:string,
    quizPartner:string,
    status:string,
    score:number,
    config?:any
}

const defaultConfig = {
  numberOfQuestion: 10,
  attempted:0,
  oppAttempted:0,
  oppScore:0,
  quizId: '',
  userId: '',
  quizPartner: '',
  status: '',
  score: 0,
}

export const useQuizConfig = create((set) => ({
  config : {...defaultConfig},
  addQuestionNumber: (numberOfQuestion:string) => set((state:configType) => ({config:{...state.config,numberOfQuestion:numberOfQuestion}})),
  addQuizId: (quizId:string) => set((state:configType) => ({config:{...state.config,quizId:quizId}})),
  addUserId: (userId:string) => set((state:configType) => ({config:{...state.config,userId:userId}})),

  addQuizPartner: (quizPartner:string) => set((state:configType) => ({config:{...state.config,quizPartner:quizPartner}})),
  changeStatus: (status:string) => set((state:configType) => ({config:{...state.config,status:status}})),
  setAttempted: () => set((state:configType) => ({config:{...state.config,attempted:state.config.attempted+1}})),
  setOppScore: (score:number) => set((state:configType) => ({config:{...state.config,oppScore:score}})),
  setOppAttempted: (attempted:number) => set((state:configType) => ({config:{...state.config,oppAttempted:attempted}})),
  setScore: (correct:boolean) => set((state:configType) => ({config:{...state.config,score:correct?state.config.score+5:state.config.score-2}})),


  removeConfig: () => set({ config:defaultConfig }),
}))

