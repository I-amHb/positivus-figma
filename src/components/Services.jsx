import React from 'react'

const Services = () => {
  return (
    <section className='px-padding-sm lg:px-padding-lg '>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1><span className='text-lar font-bold bg-primary text-center'>Services</span></h1>
        <p className='text-center max-w-[505px] lg:text-left'>At our digital marketing agency, we 
          offer a range of services to help businesses grow and succeed online. 
          These services include:</p>
      </div>
      <div className=' servicesCard-container mt-padding-md grid
      [&>div]:border-2 [&>div]:border-b-7 [&>div]:mt-padding-sm [&>div]:h-auto [&>div]:rounded-4xl'>
        <div className='p-8 flex bg-tertiary'>
          <div className=' flex flex-col justify-between gap-20 min-w-1/2'>
            <h1 className=' bg-inherit w-42 '><span className=' text-mid font-medium text-left bg-primary '>Search engine optimization</span></h1>
            <div className='flex items-center gap-4'>
              <div className='w-10 flex  items-center'><img src="/link-Icon.png" alt="link arrow" /></div>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className='flex  items-center min-w-1/2'>
            <img className='w-full ' src="/Illustration1.png" alt="illustration 1" />
          </div>
        </div>
        <div className='p-8 flex bg-primary'>
          <div className=' flex flex-col justify-between gap-20 min-w-1/2'>
            <h1 className=' bg-inherit w-42 '><span className=' text-mid font-medium text-left bg-white '>Pay-per-click advertising</span></h1>
            <div className='flex items-center gap-4'>
              <div className='w-10 flex  items-center'><img src="/link-Icon.png" alt="link arrow" /></div>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className='flex  items-center min-w-1/2'>
            <img className='w-full ' src="/Illustration2.png" alt="illustration 2" />
          </div>
        </div>
        <div className='p-8 flex bg-secondary'>
          <div className=' flex flex-col justify-between gap-20 min-w-1/2'>
            <h1 className=' bg-inherit w-42 '><span className=' text-mid font-medium text-left bg-primary '>Social Media Marketing</span></h1>
            <div className='flex items-center gap-4'>
              <div className='w-10 flex  items-center'><img src="/link-Icon2.png" alt="link arrow" /></div>
              <a className='text-white' href="#">Learn more</a>
            </div>
          </div>
          <div className='flex  items-center min-w-1/2'>
            <img className='w-full ' src="/Illustration3.png" alt="illustration 3" />
          </div>
        </div>
        <div className='p-8 flex bg-tertiary'>
          <div className=' flex flex-col justify-between gap-20 min-w-1/2'>
            <h1 className=' bg-inherit w-42 '><span className=' text-mid font-medium text-left bg-primary '>Email Marketing</span></h1>
            <div className='flex items-center gap-4'>
              <div className='w-10 flex  items-center'><img src="/link-Icon.png" alt="link arrow" /></div>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className='flex  items-center min-w-1/2'>
            <img className='w-full ' src="/Illustration4.png" alt="illustration 4" />
          </div>
        </div>
        <div className='p-8 flex bg-primary'>
          <div className=' flex flex-col justify-between gap-20 min-w-1/2'>
            <h1 className=' bg-inherit w-42 '><span className=' text-mid font-medium text-left bg-white '>Content Creation</span></h1>
            <div className='flex items-center gap-4'>
              <div className='w-10 flex  items-center'><img src="/link-Icon.png" alt="link arrow" /></div>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className='flex  items-center min-w-1/2'>
            <img className='w-full ' src="/Illustration5.png" alt="illustration 5" />
          </div>
        </div>
        <div className='p-8 flex bg-secondary'>
          <div className=' flex flex-col justify-between gap-20 min-w-1/2'>
            <h1 className=' bg-inherit w-42 '><span className=' text-mid font-medium text-left bg-primary '>Analytic and Tracking</span></h1>
            <div className='flex items-center gap-4'>
              <div className='w-10 flex  items-center'><img src="/link-Icon2.png" alt="link arrow" /></div>
              <a className='text-white' href="#">Learn more</a>
            </div>
          </div>
          <div className='flex  items-center min-w-1/2'>
            <img className='w-full ' src="/Illustration6.png" alt="illustration 6" />
          </div>
        </div>
      </div>
      <div className='bg-tertiary max-h-[400px] my-padding-lg rounded-4xl p-8 
      lg:flex lg:justify-between lg:items-center lg:relative px-padding-md'>
        <div className=' lg:min-w-[400px] lg:max-w-[500px]'>
          <h1 className='text-mid font-medium'>Let's make things happen</h1>
          <p className='mt-5 lg:w-[400px]'>Contact us today to learn about how our digital marketing services can help your business grow and succeed online.</p>
          <button className='bg-secondary text-white p-2 rounded-xl mt-5 w-full md:w-2/3 h-16'>Get your proposal</button>
        </div>
        <div className='services-cta hidden lg:block w-88 h-[350px]' >
          <img className='services-cta-img lg:absolute -top-5 w-[550px]' src="/Frame19.png" alt="frame" />
        </div>
      </div>
    </section>
  )
}

export default Services