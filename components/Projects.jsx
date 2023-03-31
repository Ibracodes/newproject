import React from 'react'
import HotelImg from '../public/assets/projects/project-101.png'
import FinanceImg from '../public/assets/projects/finance.png'
import PortfolioImg from '../public/assets/projects/port.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
         <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
         <h2 className='py-4'>What I&#39;ve Build</h2>

         <div className='grid md:grid-cols-2 gap-8'>

           
         <ProjectItem title='Hotel Website' backgroundImg={HotelImg} projectUrl='/hotel' />
         <ProjectItem title='Finance Website' backgroundImg={FinanceImg} projectUrl='/finance' />
         <ProjectItem title='Portfolio Website' backgroundImg={PortfolioImg} projectUrl='/portfolio' />

         </div>
        </div>
    </div>
  )
}

export default Projects