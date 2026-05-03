import React, { useState } from 'react'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [showNavBar, setShowNavBar] = useState(true);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY) {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
        setPrevScrollY(currentScrollY);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return (
        <header className=' flex flex-col relative w-full px-padding-sm h-auto my-padding-sm items-center
        Stablet:px-padding-md lg:px-padding-lg'>
            <nav className={`bg-white fixed left-0 right-0 px-padding-sm z-101 top-0 w-full h-[105px] flex justify-between py-padding-sm 
            lg:px-padding-lg items-center transition-transform duration-300 ease-in-out ${showNavBar ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex items-center'>
                    <div className=''>
                        <img
                            className=' lg:min-w-[2.1rem] w-[2.1rem]'
                            src="/Star.png" alt="star symbol" />
                    </div>
                    <h1 className='text-lar font-medium ml-2 '>Positivus</h1>
                </div>
                <ul className={`absolute w-2/3 top-[105px] bg-inherit flex flex-col h-screen items-center 
                font-normal text-[18px] transition-all transform ease-in-out duration-200 gap-6
                ${!toggleMenu ? '-right-full' : 'right-0 bg-primary'}
                ${!showNavBar ? 'hidden' : 'block'}
                md:w-1/3 lg:flex-row lg:static lg:w-auto lg:h-auto lg:gap-0  `}>
                    <li className='nav-li lg:mr-9 '><a href="#">About us</a></li>
                    <li className='nav-li lg:mr-9 '><a href="#">Services</a></li>
                    <li className='nav-li lg:mr-9 '><a href="#">Use Cases</a></li>
                    <li className='nav-li lg:mr-9 '><a href="#">Pricing</a></li>
                    <li className='nav-li lg:mr-9 '><a href="#">Blog</a></li>
                    <button className=' h-15 w-[210px] p-2 rounded-xl border-[1.5px] ' >Request a quote</button>
                </ul>
                <div className='lg:hidden'
                    onClick={() => setToggleMenu(prev => !prev)}>
                    {toggleMenu ? <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>}



                </div>

            </nav>
        </header>
    )
}

export default Header