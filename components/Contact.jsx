import React from 'react'
import Image from 'next/image'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import {HiChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import Image9  from '../public/assets/contact.jpg'

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
               {/* left */}
               <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
               <div className='lg:p-4 h-full'>
                <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={Image9} alt='/' width='450' height='450'  />
                </div>
                     <div>
                      <h2 className='py-2'>Ibra Codes</h2>
                      <p>Front-end developer</p>
                      <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&#39;s talk</p>
                     </div>
                   
                   <div>
                     <p className='uppercase pt-8'>Connect with me</p>
                     <div className='flex items-center justify-between py-4'>

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
               {/* right */}

               <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                  <div className='p-4'>
                   <form>
                     <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                       <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                       </div>

                       <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                       </div>
                     </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                         <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
                        </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                         <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                        </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Text</label>
                         <textarea className='border-2 rounded-lg p-3 border-gray-400 ' rows='10'></textarea>
                        </div>

                        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>

                   </form>
                </div>

             </div>


          </div>
           <div className='flex justify-center py-12'>
            <Link href='/'>
              <div className= "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
               <HiChevronDoubleUp className='text-[#5651e5]' size={30}/>
              </div>
            </Link>
           </div>
      </div>
   </div>
  )
}

export default Contact