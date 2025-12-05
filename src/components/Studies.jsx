import React from 'react'

const Studies = () => {
  return (
    <section className='px-padding-sm lg:px-padding-lg h-screen '>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1><span className='text-lar font-bold bg-primary text-center'>Case Studies</span></h1>
        <p className='text-center max-w-[505px] lg:text-left'>Explore Real-Life Examples of our Proven Digital Marketing Success through Our
          Case Studies
        </p>
      </div>
      <div className='case-studies-tabs grid mt-padding-md text-white w-full justify-center gap-x-4 
      [&>div]:min-w-[280px] [&>div]:w-full [&>div]:max-w-[300px] [&>div]:px-padding-sm [&>div]:py-[55px] [&>div]:bg-secondary [&>div]:rounded-4xl '>
        <div className='flex flex-col gap-8  '>
          <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic 
            and a 25% increase in sales.</p>
          <div>
            <a href="#" className='flex items-center gap-2 text-primary '>Learn More 
              <img className=' w-8' src="/link-Icon.png" alt="Link Icon" />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-8 '>
          <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords 
            and a 200% increase in organic traffic.</p>
          <div>
            <a href="#" className='flex items-center gap-2 text-primary '>Learn More 
              <img className=' w-8' src="/link-Icon.png" alt="Link Icon" />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-8 '>
          <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% 
            and generated a 20% increase in online sales.</p>
          <div>
            <a href="#" className='flex items-center gap-2 text-primary '>Learn More 
              <img className=' w-8' src="/link-Icon.png" alt="Link Icon" />
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Studies