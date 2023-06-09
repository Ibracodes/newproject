import React from "react"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'

export const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
                  <h1 className="py-4 text-gray-700">
                    Hi, I&#39;m <span className="text-[#5651e5]">Ibra</span>
                  </h1>
                  <h1 className="py-4 text-gray-700">
                     A FRONT-END WEB DEVELOPER
                  </h1>
                  <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    I&#39;m a front-end developer specializing in building (and 
                    occasionally designing) exceptional digital experiences. Currently, I&#39;m focused on building responsive front-end web applications while 
                    learning back-end technologies
                  </p>
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                     <div className= "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     <a href='https://www.linkedin.com/in/gure-ibrahim-aden-0a33a0203' target={'_blank'}> <FaLinkedinIn/> </a>
                     </div>

                     <div className= "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     <a href='https://github.com/Ibracodes/' target={'_blank'}>  <FaGithub /> </a>
                     </div>

                     <div className= "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     <a href="mailto:contact.GureAden@gmail.com"  target={'_blank'}>  <AiOutlineMail /> </a>
                     </div>

                     <div className= "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     <a href='https://twitter.com/Ibra_codes' target={'_blank'}>  <AiFillTwitterCircle/> </a>
                     </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

