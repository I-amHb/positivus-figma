import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='w-full bg-secondary text-white'>
        <div className='footer-header'>
          <div>
            <img src="" alt="white star" />
            <h1 className='text-mid'>Positivus</h1>
          </div>
          
          <ul className='footer-navlinks [&>li]:cursor-pointer '>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          <ul className="socials-list">
            <li><img src="" alt="" /></li>
            <li><img src="" alt="" /></li>
            <li><img src="" alt="" /></li>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer