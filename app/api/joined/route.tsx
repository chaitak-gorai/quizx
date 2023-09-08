import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    try{
    const body=await req.json()
    const {quizId,userId}=body
    const [quiz,creatorId]=quizId.split("--")
    console.log(quiz,creatorId)
    if(creatorId==userId){
           return new Response('ok') 
    }
     await pusherServer.trigger(toPusherKey(quizId), 'user-joined', userId)
    
  
    return new Response("ok")
    }catch(e){
        console.log(e)
        return new Response("error",{status:500})
    }
 
}
    