import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-padding-md'>
      <div className='w-full py-padding-md px-padding-sm bg-secondary text-white'>
        <div className='footer-header'>
          <div className='w-full flex'>
            <div><svg width="26" height="26" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3135_135)"><path d="M14.7573 4.45854L29.1886 0.28125L24.9778 14.5001L29.1886 28.6788L14.7573 24.5416L0.285156 28.6788L4.53687 14.5001L0.285156 0.28125L14.7573 4.45854Z" fill="white" /></g><defs><clipPath id="clip0_3135_135"><rect width="29.5167" height="29" fill="white" /></clipPath></defs></svg></div>
            <h1 className='text-mid'>Positivus</h1>
          </div>

          <ul className='footer-navlinks [&>li]:cursor-pointer '>
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

      </div>
    </footer>
  )
}

export default Footer