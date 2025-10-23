import React, { useEffect, useState } from 'react';
import useHookApps from "../Hooks/useHookApps";
import BarCharts from "./BarCharts";
import { useParams } from 'react-router';
import NotFound from './NotFound';
import LoadingSpinner from '../Loading/LoadingSpining';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const AppDetails = () => {
    const [install, setInstall] = useState(false);
    const { apps, loading } = useHookApps();
    
        const { id } = useParams();
     const app = apps.find((ap) => String(ap.id) === id);

    useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = savedList.some((a) => a.id === app?.id);
    setInstall(alreadyInstalled);
}, [app]);


  if (loading) return <LoadingSpinner></LoadingSpinner>
  if (!apps) return <NotFound></NotFound>

        const {companyName,image,ratings,description, ratingAvg, reviews,size, title,downloads,     
    } = app;

        const handleInstall = () => {
        setInstall(true);
        const existList = JSON.parse(localStorage.getItem("install")) || [];

        const isDuplicate = existList.some((a) => a.id === app.id);

        if (isDuplicate) {
            
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `Already Installed.`,
  footer: '<a href="#">Please Check Your Storage</a>'
});
 
            
        } else {
            const updatedList = [...existList, app];
            localStorage.setItem("install", JSON.stringify(updatedList));
        
            Swal.fire({
  title: `${title} installed Successfully`,
  icon: "success",
  draggable: true
});
        }
    }; 

    return (
           <div className="px-4 md:px-0 py-6">
            <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                    <img src={image} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-xl flex-shrink-0"/>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                            {title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">Developed by <span className="text-base sm:text-lg text-blue-600">{companyName}</span> 
                        </p>
                        <hr className="text-gray-300 mb-4"/>
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4">
                            <div className="flex flex-col items-center">
                                <p className="text-green-500">↓</p>
                                <span className="text-xs text-gray-500 mb-1">Downloads</span>
                                <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                                    {downloads.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-orange-400">★</p>
                                <span className="text-xs text-gray-500 mb-1">Rating</span>
                                <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                                    {ratingAvg}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <p><img className="w-5 h-5" src={reviews} alt=""/></p>
                                <span className="text-xs text-gray-500 mb-1">Reviews</span>
                                <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                                    {reviews.toLocaleString()}
                                </span>
                            </div>
                        </div>
                        <button onClick={handleInstall} disabled={install}
                            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 btn w-full sm:w-auto text-sm sm:text-base">
                            {install ? "Installed" : `Install Now (${size} MB)`}
                       
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-6">
                <hr className="text-gray-300 mb-4" />
                <p className="font-bold mb-3 text-lg sm:text-xl">Ratings</p>
                <div className="overflow-x-auto">
                    <BarCharts ratings={ratings}></BarCharts>
                    
                </div>
            </div>
            <div className="my-6">
                <hr className="text-gray-300 mb-4" />
                <p className="font-bold mb-3 text-lg sm:text-xl">Description</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;