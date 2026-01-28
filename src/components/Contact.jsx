import React from 'react'

const Contact = () => {
  return (
    <section className='px-padding-sm lg:px-padding-lg h-auto'>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1 className=""><span className='px-2 rounded text-lar font-bold bg-primary text-center'>Contact Us</span></h1>
        <p className='text-center max-w-[340px] lg:text-left'>Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className='form-container mt-padding-md'>
        <form action="" className=' w-full border bg-tertiary p-padding-sm rounded-4xl 
        lg:grid lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] '> {/* check here */}
          <div className='FS-container lg:max-w-[580px] col-start-1  col-end-3'>
            <fieldset id='radio' className='radio flex justify-evenly' >
              <label name='hi'>
                <input type="radio" name="contact-type" id="say-hi" defaultChecked /> Say Hi!
              </label>
              <label name='qoute'>
                <input type="radio" name="contact-type" id="get-a-quote" /> Get a Quote
              </label>
            </fieldset>
            <fieldset className=' grid grid-cols-1 gap-6 py-8 w-full md:place-items-center'>
              <label htmlFor="contact" className='grid grid-cols-1 w-full gap-2.5 md:w-2/3 [&>input]:w-full [&>input]:outline-none [&>input]:border [&>input]:bg-white
            [&>input]:rounded-sm [&>input]:h-11 md:[&>input]:h-15 [&>input]:p-5 ' >Name
                <input type="text" name="name" id="name" placeholder='Name' />
              </label>
              <label htmlFor="contact" className='grid grid-cols-1 w-full gap-2.5 md:w-2/3 [&>input]:w-full [&>input]:outline-none [&>input]:border [&>input]:bg-white
            [&>input]:rounded-sm [&>input]:h-11  md:[&>input]:h-15 [&>input]:p-5 ' >Email*
                <input type="email" name="email" id="email" placeholder='Email' />
              </label>
              <label htmlFor="contact" className='grid grid-cols-1 w-full gap-2.5 md:w-2/3 [&>textarea]:w-full [&>textarea]:outline-none [&>textarea]:border [&>textarea]:bg-white
            [&>textarea]:rounded-sm [&>textarea]:h-22 md:[&>textarea]:h-35 [&>textarea]:p-5  '>Message*
                <textarea name="message" id="message" placeholder='Message' ></textarea>
              </label>
            </fieldset>
            <div className="btn-container w-full flex justify-center">
              <button
                className='h-16 w-full md:w-2/3 lg:max-w-[250px] mt-5 self-center lg:self-start
                        p-2 px-8 rounded-xl border-[1.5px] md:self-center text-white bg-secondary'
              >Send a Message
              </button>
            </div>

          </div>
          <div className='hidden lg:block img-container w-full col-start-3 col-end-4 row-span-1'><img src="/Mask-group.png" alt="Mask group image" className='w-full' /></div>
        </form>
      </div>

    </section>
  )
}

export default Contact