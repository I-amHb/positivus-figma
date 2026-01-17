import React, { useState, useEffect } from 'react'

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
    {
      name: 'John Smith',
      role: "Marketing Director at XYZ Corp",
      quote: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
    },
  ]

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 661);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 661)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CARD_WIDTH = window.innerWidth >= 1024
    ? 515
    : window.innerWidth >= 661
      ? 400
      : null;

  const transformStyle = isMobile
    ? `translateX(-${current * 100}%)`
    : `translateX(-${current * (CARD_WIDTH + 24)}px)`;

  const prev = () => setCurrent(current === 0 ? testimonial.length - 1 : current - 1)
  const next = () => setCurrent(current === testimonial.length - 1 ? 0 : current + 1)

  const UserTestimonial = testimonial.map((user) => (
    <div className='testimonial relative z-100  p-padding-sm min-w-[330px] '>
      <div className='relative z-0 border border-primary bg-secondary p-padding-sm rounded-4xl'>
        <p className='bg-secondary'>{user.quote}</p>
      </div>
      <div className=' absolute z-1 w-[100px] left-13 bottom-19'><svg id="eZRlzJQGx5k1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 154" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="6c993f5bfe7e4561aa31547ad62dfbe4" export-id="a0b70685cf66475c8478bcd10afdefb8" cached="false"><polygon points="50,69.193858 -100,200 200,200 50,69.193858" transform="matrix(1 0 0 -1 100 219.193858)" fill="#191a23" /><line x1="77.015355" y1="63.147792" x2="-59.578713" y2="-56.906235" transform="translate(72.984645 86.852208)" fill="none" stroke="#b9ff66" stroke-width="2" /><line x1="-75" y1="65.403071" x2="61.235294" y2="-54.650956" transform="translate(225 84.596929)" fill="none" stroke="#b9ff66" stroke-width="2" /></svg></div>
      <div className='pl-12 md:pl-20 mt-13'>
        <h2 className='font-bold text-[15px] md:text-[16] '>{user.name}</h2>
        <p className='text-[13px] md:text-[18]'>{user.role}</p>
      </div>
      <div className='triangle border-primary'></div>
    </div>
  ))

  return (
    <section className='px-padding-sm lg:px-padding-lg h-auto' >
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1 className=""><span className='px-2 rounded text-lar font-bold bg-primary text-center'>Testimonials</span></h1>
        <p className='text-center max-w-[505px] lg:text-left'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className=' h-auto text-white w-full min-h-24 mt-18 bg-secondary rounded-4xl overflow-hidden'>
        <div className='testimonials-container transition-transform ease-out duration-500'
          style={{ transform: transformStyle}}>
          {UserTestimonial}
        </div>
        <div className='navigator-cont w-full'>
          <div className='navigation w-full flex justify-between p-padding-sm '>
            <button onClick={prev}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e3e3e3"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" /></svg></button>
            <button onClick={next}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e3e3e3"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Testimonials