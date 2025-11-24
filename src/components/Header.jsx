import React, { useState } from 'react'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);




    return (
        <header className=' relative w-full px-padding-sm h-auto my-padding-sm 
        Stablet:px-padding-md lg:px-padding-lg'>
            <nav className='bg-white fixed left-0 right-0 px-padding-sm z-101 top-0 w-full h-[105px] flex justify-between py-padding-sm 
            lg:px-padding-lg '>
                <div className='flex items-center'>
                    <div className=''>
                        <img
                            className=' lg:min-w-[2.1rem] w-[2.1rem]'
                            src="/Star.png" alt="star symbol" />
                    </div>
                    <h1 className='text-lar font-medium ml-2 '>Positivus</h1>
                </div>
                <ul className={`absolute w-2/3 top-[105px] bg-inherit flex flex-col h-screen items-center 
                font-normal text-[18px] transition-all transform- ease-in-out duration-200 
                ${!toggleMenu ? '-right-full' : 'right-0 bg-primary'} 
                md:w-1/3 lg:flex-row lg:static lg:w-auto lg:h-auto  `}>
                    <li className=' lg:mr-9'><a href="#">About us</a></li>
                    <li className=' lg:mr-9'><a href="#">Services</a></li>
                    <li className=' lg:mr-9'><a href="#">Use Cases</a></li>
                    <li className=' lg:mr-9'><a href="#">Pricing</a></li>
                    <li className=' lg:mr-9'><a href="#">Blog</a></li>
                    <button className=' h-15 w-[210px] p-2 rounded-xl border-[1.5px] ' >Request a quote</button>
                </ul>
                <div className='lg:hidden'
                    onClick={() => setToggleMenu(prev => !prev)}>
                    {toggleMenu ? <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>}



                </div>

            </nav>

            <div className='mt-35 w-full flex justify-between items-center
            lg:mt-[130px] '>
                <div className=' max-w-full flex flex-col lg:max-w-[510px]'>
                    <h1 className='text-xl font-bold  '>Navigating the digital landscape for success</h1>
                    <div className='flex justify-center items-center  min-w-full lg:min-w-[550px] min-h-[400px] z-0 relative  
                    desktop:hidden'>
                        <div className='min-w-[330px] max-w-[400px] h-[400px] relative '>
                            <div className='relative max-w-[500px] max-h-[500px] rotate-30 top-40 left-4  '>
                                <img src="/Ring.png" alt="ring" className='absolute z-1 top-6 left-3' />
                                <img src="/Ring.png" alt="ring" className='absolute z-1 left-3' />
                                <img src="/Ring.png" alt="ring" className='absolute z-1 top-11 left-3 ' />
                            </div>
                            <div className=' absolute w-[220px] z-100 top-12 left-17 '>
                                <img className=''
                                    src="/Megaphone.png" alt="megaphone" />
                                <img
                                    className='absolute w-[48px] max-w-[50px] -top-2 right-1'
                                    src="/Heart.png" alt="Heart Icon" />
                                <img
                                    className='absolute min-w-[38px] max-w-[50px] top-0 -right-11'
                                    src="/Share.png" alt="Share Icon" />
                                <img
                                    className='absolute min-w-[38px] max-w-[50px] top-14 -right-10'
                                    src="/Play.png" alt="Play Button" />
                                <div className='flex justify-center items-center absolute top-30 -right-7 min-w-[37px] min-h-[37px]
                                 max-w-[67px] max-h-[67px] rounded-[100%] border-2 bg-primary'>
                                    <img
                                        className='w-5 '
                                        src="/Location.png" alt="Location Button" />
                                </div>
                            </div>
                            <img className='absolute max-w-[38px] rotate-45 left-10 bottom-30
                                lg:max-w-[76px]'
                                src="/Star.png" alt="Star Icon" />
                            <img className='absolute w-5 right-35 bottom-20 '
                                src="/Star.png" alt="Star Icon" />
                            <img className='absolute w-4 left-16 top-26'
                                src="/GreenBall.png" alt="Green Circle" />
                            <img className='absolute w-3 right-23 bottom-23'
                                src="/GreenBall.png" alt="Green Circle" />
                            <img className='absolute w-7 top-17 left-8'
                                src="/Ellipse.png" alt="Green Circle" />

                        </div>

                    </div>
                    <p className='mt-7 max-w-full lg:w-[425px] '>Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including SEO,
                        PPC, social media marketing, and content creation.
                    </p>
                    <button
                        className='h-16 w-full md:w-2/3 lg:max-w-[250px] mt-5 self-center lg:self-start
                        p-2 px-8 rounded-xl border-[1.5px] text-white bg-secondary'
                    >Book of consultation
                    </button>
                </div>
                <div className='h-[500px]'>
                    <div className='relative min-w-0 lg:min-w-[480px] lg:max-w-[550px] h-[445px] z-0 hidden lg:block '>
                        <div className='relative w-[500px] rotate-30 top-40 left-10  '>
                            <img src="/Ring.png" alt="ring" className='absolute z-1 top-9' />
                            <img src="/Ring.png" alt="ring" className='absolute z-1' />
                            <img src="/Ring.png" alt="ring" className='absolute z-1 top-18 ' />
                        </div>
                        <img className=' absolute w-[300px] z-100 top-2 left-30 '
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
                        <img className='absolute rotate-45 left-15 bottom-25'
                            src="/Star.png" alt="Star Icon" />
                        <img className='absolute w-6 left-60 bottom-13 '
                            src="/Star.png" alt="Star Icon" />
                        <img className='absolute w-7 left-21 top-15'
                            src="/GreenBall.png" alt="Green Circle" />
                        <img className='absolute w-4 left-85 bottom-18'
                            src="/GreenBall.png" alt="Green Circle" />
                        <img className='absolute w-10 top-3 left-7'
                            src="/Ellipse.png" alt="Green Circle" />
                    </div>
                </div>

            </div>
            <div className='w-full mt-19'>
                <div
                    className=' grid justify-between gap-4 grid-cols-2 md:grid-cols-6 md:gap-2  md:[&>div]:w-[110px] lg:grid-cols-6 lg:gap-10 [&>div]:w-[120px] [&>div]:grayscale mx-auto max-w-fit '
                >
                    <div><img src="/amazon-logo.png" alt="amazon logo" /></div>
                    <div><img src="/dribble-logo.png" alt=" logo" /></div>
                    <div><img src="/hubspot-logo.png" alt="hubspot logo" /></div>
                    <div><img src="/notion-logo.png" alt="notion logo" /></div>
                    <div><img src="/netflix-logo.png" alt="netflix logo" /></div>
                    <div><img src="/zoom-logo.png" alt="zoom logo" /></div>
                </div>
            </div>
        </header>
    )
}

export default Header