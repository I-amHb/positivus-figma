import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-padding-md'>
      <div className='w-full py-padding-md px-padding-sm bg-secondary text-white'>
        <div className='footer-header '>
          <div className='w-full flex justify-center items-center gap-2'>
            <div><svg width="26" height="26" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3135_135)"><path d="M14.7573 4.45854L29.1886 0.28125L24.9778 14.5001L29.1886 28.6788L14.7573 24.5416L0.285156 28.6788L4.53687 14.5001L0.285156 0.28125L14.7573 4.45854Z" fill="white" /></g><defs><clipPath id="clip0_3135_135"><rect width="29.5167" height="29" fill="white" /></clipPath></defs></svg></div>
            <h1 className='text-mid font-medium '>Positivus</h1>
          </div>

          <ul className='footer-navlinks [&>li]:cursor-pointer flex flex-col justify-center lg:underline
          [&>li]:text-center [&>li]:mt-[18px] '>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          {/* <ul className="socials-list">
            <li><img src="" alt="" /></li>
            <li><img src="" alt="" /></li>
            <li><img src="" alt="" /></li>
          </ul> */}
        </div>
        <div className="contact mt-15">
          <h1 className=' text-center'><span className='px-2 rounded text-black font-bold bg-primary text-center'>Contact us:</span></h1>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>

          <p>Address: 1234 Main St Moonstrong City, Stardust State 1234</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer