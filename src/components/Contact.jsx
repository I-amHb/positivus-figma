import React from 'react'

const Contact = () => {
  return (
    <section className='px-padding-sm lg:px-padding-lg h-auto'>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1 className=""><span className='px-2 rounded text-lar font-bold bg-primary text-center'>Contact Us</span></h1>
        <p className='text-center max-w-[340px] lg:text-left'>Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className='form container w-full border bg-tertiary p-padding-sm rounded-4xl '>
        <form action="">
          <fieldset id='radio' className='radio flex justify-between' >
            <label name='hi'>
              <input type="radio" name="contact-type" id="say-hi" defaultChecked/> Say Hi!
            </label>
            <label name='qoute'>
              <input type="radio" name="contact-type" id="get-a-quote" /> Get a Quote
            </label>
          </fieldset>
          <fieldset className='border'>
            <label htmlFor="">Name 
              <input type="text" name="name" id="email" />
            </label>
            <label htmlFor=""> Email*
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="">Message*
              <textarea name="message" id="message"></textarea>
            </label>
          </fieldset>


        </form>
      </div>

    </section>
  )
}

export default Contact