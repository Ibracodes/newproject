import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
             <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
             <h2 className='py-4'>Who I am</h2>
             <p className='py-2 text-gray-600'>I am not your normal developer</p>
             <p className='py-2 text-gray-600' >
             I&#39;m passionate about crafting beautiful, user-friendly websites and applications that deliver a seamless user experience. I specialize in developing and implementing the user interface (UI) of websites and web applications, with a keen eye for detail and a focus on usability.

             My skills include proficiency in HTML, CSS, JavaScript, and various front-end frameworks and libraries, such as React. I stay up to date with the latest trends and technologies in the industry, and am always looking for new ways to improve my skills and knowledge.
             </p>
             <p className='py-2 text-gray-600'>
             When I&#39;m not coding, you can find me exploring the great outdoors or reading up on the latest tech news. I&#39;m excited about the future of front-end development and can&#39;t wait to see what new challenges and opportunities lie ahead
             </p>
             <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src='/../public/assets/about.jpg' alt='/' width='350' height='300' className='rounded-xl' />
          </div>
        </div>
    </div>
  )
}

export default About