import React, { useState } from 'react'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <header className=' relative w-full px-padding-md h-paddind-lg my-padding-sm 
        lg:px-padding-lg'>
            <nav className='sticky max-w-[1440px] flex justify-between '>
                <div className='flex items-center'>
                    <div className=''>
                        <img
                            className=' w-[2.1rem]'
                            src="/Star.png" alt="star symbol" />
                    </div>
                    <h1 className='text-lar font-medium ml-2 '>Positivus</h1>
                </div>
                <ul className='flex items-center font-normal text-[18px]'>
                    <li className=' mr-9'><a href="#">About us</a></li>
                    <li className=' mr-9'><a href="#">Services</a></li>
                    <li className=' mr-9'><a href="#">Use Cases</a></li>
                    <li className=' mr-9'><a href="#">Pricing</a></li>
                    <li className=' mr-9'><a href="#">Blog</a></li>
                    <button className=' h-15 w-[210px] p-2 rounded-xl border-[1.5px] '>Request a quote</button>
                </ul>

            </nav>

            <div className='mt-padding-md flex justify-between'>
                <div className='max-w-[510px]'>
                    <h1 className='text-xl font-bold  '>Navigating the digital landscape for success</h1>
                    <p className='mt-7 w-[425px] '>Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including SEO,
                        PPC, social media marketing, and content creation.
                    </p>
                    <button
                        className='h-16 max-w-[250px] mt-5 p-2 px-8 rounded-xl border-[1.5px] text-white bg-secondary'
                    >Book of consultation
                    </button>
                </div>
                <div className=' min-w-[550px] z-0 relative pl-10 '>
                    <div className='relative w-[500px] rotate-30 top-40 left-10  '>
                        <img src="/Ring.png" alt="ring" className='absolute z-1 top-9' />
                        <img src="/Ring.png" alt="ring" className='absolute z-1' />
                        <img src="/Ring.png" alt="ring" className='absolute z-1 top-18 ' />
                    </div>
                    <img className=' absolute w-[300px] z-100 top-5 left-45 '
                        src="/Megaphone.png" alt="megaphone" />
                    <img
                        className='absolute w-[77px] right-20'
                        src="/Heart.png" alt="Heart Icon" />
                    <img
                        className='absolute w-[77px] right-1 top-5'
                        src="/Share.png" alt="Share Icon" />
                    <img
                        className='absolute w-[77px] right-0 top-25'
                        src="/Play.png" alt="Play Button" />
                    <div className='flex justify-center items-center absolute top-48 right-2
                    w-[67px] h-[67px] rounded-[100%] border-2 bg-primary'>
                        <img
                            className='w-8 '
                            src="/Location.png" alt="Location Button" />
                    </div>
                    <img className='absolute rotate-45 left-25 bottom-30'
                        src="/Star.png" alt="Star Icon" />
                    <img className='absolute w-8 right-60 bottom-15 '
                        src="/Star.png" alt="Star Icon" />
                    <img className='absolute w-7 left-31 top-15'
                        src="/GreenBall.png" alt="Green Circle" />
                    <img className='absolute w-4 right-30 bottom-16'
                        src="/GreenBall.png" alt="Green Circle" />
                    <img className='absolute w-10 top-5 left-10'
                        src="/Ellipse.png" alt="Green Circle" />
                </div>
            </div>
            <div className='w-full mt-19'>
                <ul
                    className='flex justify-between items-center [&>li]:w-[120px] [&>li]:grayscale '
                >
                    <li><img src="/amazon-logo.png" alt="amazon logo" /></li>
                    <li><img src="/dribble-logo.png" alt=" logo" /></li>
                    <li><img src="/hubspot-logo.png" alt="hubspot logo" /></li>
                    <li><img src="/notion-logo.png" alt="notion logo" /></li>
                    <li><img src="/netflix-logo.png" alt="netflix logo" /></li>
                    <li><img src="/zoom-logo.png" alt="zoom logo" /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header