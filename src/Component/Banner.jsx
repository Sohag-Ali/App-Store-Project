import React from 'react';
import play from '../assets/Playstore.png'
import appStore from '../assets/App Store.png'
import heroPng from '../assets/hero.png'

const Banner = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-8 justify-center items-center px-4 md:px-6 lg:px-10 my-6 md:my-10'>
            <div className='w-full max-w-4xl'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 overflow-hidden whitespace-nowrap border-r-4 border-gray-400 animate-typing mx-auto'>
                    We Build <br /> 
                    <span className='bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] bg-clip-text text-transparent'>Productive</span> Apps
                </h1>
                <p className='text-sm sm:text-base text-gray-400 text-center px-4 md:px-0'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden md:block' />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto px-4 sm:px-0'>
                <a className='btn overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-full sm:w-auto' 
                href='https://play.google.com/store/games?hl=en'>
                    <img className='w-6 md:w-8' src={play} alt=""/> Play Store
                </a>
                <a className='btn overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-full sm:w-auto' 
                href='https://www.apple.com/app-store/'>
                    <img className='w-6 md:w-8' src={appStore} alt="App Store" /> App Store
                </a>
            </div>
            <div className='w-full max-w-6xl'>
                <img className='w-full max-w-3xl mx-auto px-4 md:px-0' src={heroPng} alt="Hero" />
                <div className='text-center text-white bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] px-4 sm:px-8 md:px-16 lg:px-30 py-6 md:py-10 rounded-2xl md:rounded-3xl mx-4 md:mx-0 mt-4 md:mt-0'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-bold'>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20'>
                        <div className='text-center'>
                            <p className='text-sm md:text-base'>Total Downloads</p>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold my-2'>29.6M</h2>
                            <p className='text-xs md:text-sm'>21% more than last month</p>
                        </div>
                        
                        <div className='text-center'>
                            <p className='text-sm md:text-base'>Total Reviews</p>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold my-2'>906K</h2>
                            <p className='text-xs md:text-sm'>46% more than last month</p>
                        </div>
                        
                        <div className='text-center'>
                            <p className='text-sm md:text-base'>Active Apps</p>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold my-2'>132K</h2>
                            <p className='text-xs md:text-sm'>31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;