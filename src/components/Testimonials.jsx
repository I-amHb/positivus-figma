import React from 'react'

const Testimonials = () => {

  const testimonial = [
    {
      name: 'John Smith',
      role: "Marketing Director at XYZ Corp",
      quote: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },
    {
      name: 'John Smith',
      role: "Marketing Director at XYZ Corp",
      quote: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },
    {
      name: 'John Smith',
      role: "Marketing Director at XYZ Corp",
      quote: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },
  ]

  return (
    <section className='px-padding-sm lg:px-padding-lg h-auto' >
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1 className=""><span className='px-2 rounded text-lar font-bold bg-primary text-center'>Testimonials</span></h1>
        <p className='text-center max-w-[505px] lg:text-left'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className='testimonials-container h-auto text-white w-full min-h-24 mt-18 bg-secondary rounded-4xl'>
          {testimonial.map((user) => (
            <div className='p-padding-sm min-w-[330px] '>
              <div className='border border-primary p-padding-sm rounded-4xl'>
                  <p className=''>{user.quote}</p>
              </div>
              <div className='pl-14 mt-8'>
                <h2 className='font-bold text-[15px] md:text-[16] '>{user.name}</h2>
                <p className='text-[13px] md:text-[18]'>{user.role}</p>
              </div>
              <div className='triangle border-primary'></div>
            </div>
            
          ))}
      </div>
    </section>
  )
}

export default Testimonials