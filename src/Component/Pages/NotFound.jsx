import React from 'react';
import notFound from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
       <div className='flex flex-col gap-10 justify-center items-center my-20'>
            <img className='animate-bounce' src={notFound} alt="" />
            <div className='text-center'>
                <h1 className='text-5xl'>Oops, Apps not found!</h1>
                <p className='p-5 text-gray-400'>The App you are looking for is not available.</p>
                <button onClick={() => navigate(-1)} className='btn bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] text-white'>Go Back</button>
            </div>
        </div>
    );
};

export default NotFound;