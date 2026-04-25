import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-padding-md lg:mx-padding-lg '>
      <div className='w-full py-padding-md px-padding-sm bg-secondary text-white lg:rounded-t-4xl'>
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

          <div className="socials-list hidden gap-3 justify-center items-center mt-5 lg:flex">
            <a href='#' className='linkedIn '>
              <svg fill="#fff" height="26" width="26" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-143 145 512 512" xml:space="preserve">
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"/>
              </svg>
            </a>
            <a href='#' className='facebook '>
              <svg fill="#000000" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </a>
            <a href='#' className='twitter '>
              <svg fill="#000000" height="26" width="26" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-143 145 512 512" xml:space="preserve">
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="contact mt-9 [&>p]:text-center [&>p]:mt-2">
          <h1 className=' text-center'><span className='px-2 rounded text-black font-bold bg-primary text-center'>Contact us:</span></h1>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>

          <p>Address: 1234 Main St <br /> Moonstrong City, Stardust State 1234</p>

          <form className='w-full h-auto bg-secLight p-padding-sm rounded-2xl mt-padding-sm '>
            <input type="text" placeholder='Email' 
            className='p-3 border rounded-xl w-full h-15 ' />
            <button href='#'
            className='w-full h-15 rounded-xl p-3 bg-primary text-black mt-6 '>Subscribe to news</button>
          </form>
        </div>

        <div className="socials-list lg:hidden gap-3 justify-center items-center mt-7 flex">
            <a href='#' className='linkedIn '>
              <svg fill="#fff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-143 145 512 512" xml:space="preserve">
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"/>
              </svg>
            </a>
            <a href='#' className='facebook '>
              <svg fill="#fff" width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </a>
            <a href='#' className='twitter '>
              <svg fill="#fff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-143 145 512 512" xml:space="preserve">
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
              </svg>
            </a>
          </div>

        <div className='py-5 border-t-2 mt-7 '>
          <p className='text-center mt-5'>&copy; 2024 Positivus. All rights reserved.</p>
          <p className='text-center'>Privacy Policy</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer