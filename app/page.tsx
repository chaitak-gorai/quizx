
import DropdownOptions from '@/components/DropdownOptions'
import InputBox from '@/components/InputBox'
import Button from '@/components/Buttons'
export default function Home() {

  return (
   <section className='flex flex-col justify-center items-center my-10 '>
{/* //from flowbite */}
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">QuizX: Multiplayer Quiz App.</h1>
<section className='p-10 my-10 rounded-lg shadow-xl w-[65%]'>
<h3 className="block font-medium text-gray-900" >Directly Create a Quiz or Join Quiz by quizId</h3>

{/* Flowbite? */}
<InputBox/>

<div className=" flex items-center justify-center">
<Button/>
</div>

</section>
   </section>
  )
}
