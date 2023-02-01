import React from 'react'
import flexgymprj from '../assets/portfolio/flexgymprj.png';
/* import danretstoresprj from '../assets/portfolio/danretstoresprj.png';
import arrayDestruct from '../assets/portfolio/arrayDestruct.png';
import installNode from '../assets/portfolio/installNode.png';
import navbar from '../assets/portfolio/navbar.png';
 */
const Portfolio = () => {
  return (
    <div name ="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Kindly check out  some of my projects</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            <div className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={flexgymprj} 
              alt=""
              className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Demo
                  </button>
                <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Code
                  </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Portfolio