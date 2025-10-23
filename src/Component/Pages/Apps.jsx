import React, { useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpining";
import NotFound from "./NotFound";
import Allapps from "./Allapps";
import useHookApps from "../Hooks/useHookApps";

const Apps = () => {
  const { apps, loading } = useHookApps();

  const [search, setSearch] = useState("");
  // console.log(search);
  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  // if (!apps) return <NotFound></NotFound>;

  return (
    <div className="py-6 md:py-10">
      <div className="text-center mb-6 md:mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#001931]">Our All Applications</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 px-4 md:px-0">
        <p className="font-bold text-sm md:text-base">
          <span>({searchApps.length})</span> Apps Found
        </p>

        <label className="input transform transition-transform  duration-300 hover:scale-103 transform transition-transform  duration-300 hover:scale-105 hover:shadow-xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="w-full"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
        {searchApps.map((ap) => (
          <Allapps key={ap.id} ap={ap}></Allapps>
        ))}
      </div>
      {searchApps.length === 0 && <NotFound></NotFound>}
    </div>
  );
};

export default Apps;
