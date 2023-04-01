import React from 'react'
import Image from 'next/image'
import Image1  from '../public/assets/skills/html.png'
import Image2  from '../public/assets/skills/css.png'
import Image3  from '../public/assets/skills/javascript.png'
import Image4  from '../public/assets/skills/react.png'
import Image5  from '../public/assets/skills/tailwind.png'

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Skills
            </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>


           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src= {Image1} alt='/' width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <h3>HTML</h3>
                </div>
             </div>
           </div>


           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src= {Image2} alt='/' width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <h3>CSS</h3>
                </div>
             </div>
           </div>


           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Image3} alt='/' width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <h3>Javascript</h3>
                </div>
             </div>
           </div>


           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src= {Image4} alt='/' width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <h3>React</h3>
                </div>
             </div>
           </div>


           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src= {Image5} alt='/' width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <h3>Tailwind</h3>
                </div>
             </div>
           </div>


           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src= '/../public/assets/skills/github1.png' alt='/' width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <h3>Github</h3>
                </div>
             </div>
           </div>


        </div>
      </div>
    </div>
  )
}
