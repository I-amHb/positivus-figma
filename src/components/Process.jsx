import React, { useState } from 'react'

const Process = () => {

  const [expandTab, setExpandTab] = useState([
    {step: '01', title: 'Consulation', expanded: false, content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
    {step: '02', title: 'Research and Strategy Development', expanded: false, content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
    {step: '03', title: 'Implementation', expanded: false, content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
    {step: '04', title: 'Monitoring and Optimization', expanded: false, content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
    {step: '05', title: 'Reporting and Commmunication', expanded: false, content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
    {step: '06', title: 'Continual Improvement', expanded: false, content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
  ]);

  const toggleTab = (index) => {
    setExpandTab(prev => 
      prev.map((item, i)=> 
      i === index ? {...item, expanded: !item.expanded} 
  : item)
    );
  };

  return (
    <section className='px-padding-sm lg:px-padding-lg   '>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1 className='text-center'><span className='p-1 rounded text-lar font-bold bg-primary '>Our Woring Process</span></h1>
        <p className='text-center max-w-[505px] lg:w-[300px] lg:text-left'>Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className='process-container w-full  mt-padding-md [&>div]:p-padding-sm
      [&>div]:border-2 [&>div]:border-b-7 [&>div]:mt-padding-sm [&>div]:h-auto [&>div]:rounded-[40px]
      ' >

        {expandTab.map((item, index) => (
          <div className={`w-full h-auto  transition-all ease-in-out duration-600 ${item.expanded ? 'bg-primary':'bg-white' }`}
          key={index}>
          <div className={ 
            `flex justify-between items-center lg:py-padding-sm lg:px-padding-sm ${item.expanded ? ` pb-padding-sm ` : `border-b-0` }`
          }>
            <div className='flex items-center gap-4'>
              <h1 className='text-mid font-bold lg:text-xl'>{item.step}</h1>
              <h1 className='font-bold lg:text-lar'>{item.title}</h1>
            </div>
            <div key={index} className='w-8 lg:w-10'
              onClick={() => toggleTab(index)}>
              {!item.expanded ? <img src="/plus-icon.png" alt="plus icon" /> :
               <img src="/minus-icon.png" alt="minus icon" /> }
            </div>
          </div>
          <div className={` transition-all px-padding-sm
            ${item.expanded ? `max-h-[400px] overflow-hidden pt-padding-sm lg:pb-padding-sm border-t`: `max-h-0`}
            overflow-hidden`} >
            <p>
              {item.content}
            </p>
          </div>
        </div>
        ))}
        

      </div>
    </section>
  )
}

export default Process