import React from "react";
import Banner from "../Banner";
import HookApps from "../Hooks/useHookApps";
import { useNavigate } from "react-router";
import AppHome from "./AppHome";
import LoadingSpinner from "../Loading/LoadingSpining";
import NotFound from "./NotFound";
import useHookApps from "../Hooks/useHookApps";
import { IoMdTrendingUp } from "react-icons/io";

const Home = () => {
  const { apps, loading } = useHookApps();
  const navigate = useNavigate();
  const featuredApps = apps.slice(0, 8);

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (!apps) return <NotFound></NotFound>;

  return (
    <div>
      <Banner></Banner>
      <div className="my-6 md:my-10 text-center px-4 md:px-0">
        <div className="mb-6 md:mb-10">
          <div className="flex gap-2 text-center justify-center items-center text-3xl sm:text-4xl font-bold mb-2">
            <h1>Trending Apps </h1>
          <span ><IoMdTrendingUp /></span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore All Trending Apps on the Market developed by us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {featuredApps.map((app) => (
         
            <AppHome key={app.id} app={app}></AppHome>
          ))}
        </div>
        <button
          onClick={() => navigate("/apps")}
          className="overflow-hidden transform transition-transform  duration-300 hover:scale-105 hover:shadow-xl cursor-pointer btn my-6 md:my-8 bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] text-white border-none w-full sm:w-auto px-8"
        >
          Show All Apps
        </button>
      </div>
    </div>
  );
};

export default Home;
