import React from 'react';
import Navbar from '../NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;