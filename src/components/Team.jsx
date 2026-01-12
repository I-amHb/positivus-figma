import React from 'react'

const Team = () => {

const team = [
  {picture: '/Picture1.png', name: 'John Smith', role: 'CEO and Founder', about: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'},
  {picture: '/Picture2.png', name: 'Jane Doe', role: 'Director of Operations', about: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'},
  {picture: '/Picture3.png', name: 'Michael Brown', role: 'Senior SEO Specialist', about: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'},
  {picture: '/Picture4.png', name: 'Emily Johnson', role: 'PPC Manager', about: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'},
  {picture: '/Picture5.png', name: 'Brian Williams', role: 'Social Media Specialist', about: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'},
  {picture: '/Picture6.png', name: 'Sarah kim', role: 'Content Creator', about: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries'},
]

  return (
    <section className='px-padding-sm lg:px-padding-lg h-auto '>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1><span className='text-lar font-bold bg-primary text-center'>Team</span></h1>
        <p className='text-center max-w-[505px] lg:text-left'>Meet the skilled and experienced team behind our successful digital marketing strategies  
        </p>
      </div>
      <div className='team-container'>
        <div className=' border-2 border-b-7 rounded-4xl p-padding-smid'>
          <div className='flex pb-3'>
            <div className='team-pic w-25 mr-4'><img src="/Picture1.png" alt="" /></div>
            <div className='w-full '>
              <div className='w-full flex  justify-end'><img className='w-7 self-end' src="/LinkedIn-icon.png" alt="linkedin icon" /></div>
              <div>
                <h1 className='font-bold'>John Smith</h1>
                <h4>CEO and Founder</h4>
              </div>
            </div>
          </div>
          <div className='border-t-2 pt-3'>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team