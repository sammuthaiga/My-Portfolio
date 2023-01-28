import React from 'react'

const About = () => {
  return (
    <div name = "about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Sam Muthaiga</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur, impedit id voluptatem esse excepturi, harum placeat odit, quasi iure consectetur molestiae totam. Praesentium deserunt, possimus magni laborum dignissimos doloremque minus hic expedita odit vitae earum quas veritatis optio tempore, saepe itaque commodi a accusamus id amet. In, aspernatur adipisci.
            </p>
            <br/>

            <p className='text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum totam voluptate recusandae omnis incidunt quaerat praesentium sint eveniet non! Voluptates sit pariatur at quaerat culpa saepe reiciendis est ex, iure deserunt autem modi obcaecati tempore inventore, provident repudiandae ad dolor ipsum quasi reprehenderit ratione delectus eveniet similique? Animi, dolor impedit?
            </p>
        </div>
    </div>
  )
}

export default About