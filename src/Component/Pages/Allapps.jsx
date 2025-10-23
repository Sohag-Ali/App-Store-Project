import React from 'react';
import { NavLink } from 'react-router';
import downloadImage from '../../assets/downloads.png'
import ratingImage from '../../assets/ratings.png'

const Allapps = ({ ap }) => {
    const {id} = ap;
    return (
        <NavLink state={ap} to={`/AppDetails/${id}`}>
            <div className='p-3 shadow-sm rounded-lg bg-white flex flex-col justify-center items-center gap-3 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
                <img src={ap.image} alt="" />
                <p className='text-xl font-bold'>{ap.title}</p>
               <div className='flex justify-between gap-30'>
                                   <div className="flex items-center gap-1  text-sm bg-gray-100 p-1 rounded-sm text-bold text-green-400">
                                       <img className=' h-4' src={downloadImage} alt="" /> 
                                       <p>{ap.downloads}</p>
                                   </div>
               
                                   <div className="flex items-center justify-center gap-1 text-sm bg-gray-100 p-1 rounded-sm text-bold text-orange-400 px-2">
                                       <img className='h-3' src={ratingImage} alt="" />
                                       <p>{ap.ratingAvg}</p> 
                                   </div>
                               </div>
            </div>
        </NavLink>
    );
};

export default Allapps;