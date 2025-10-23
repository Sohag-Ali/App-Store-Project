import React, { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import downloadImage from '../../assets/downloads.png'
import ratingImage from '../../assets/ratings.png'

const MySwal = withReactContent(Swal);

const InstallApp = () => {
  const [inst, setInst] = useState([]);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) {
      setInst(savedList);
    }
  }, []);

  const sortedItems = useMemo(() => {
    if (sort === "downloads-asc") {
      return [...inst].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "downloads-desc") {
      return [...inst].sort((a, b) => b.downloads - a.downloads);
    } else {
      return inst;
    }
  }, [inst, sort]);

  const handleDelete = (id, title) => {
    const savedList = JSON.parse(localStorage.getItem("install")) || [];
    const updatedList = savedList.filter((item) => item.id !== id);

    localStorage.setItem("install", JSON.stringify(updatedList));
    setInst(updatedList);
    // alert(`${title} uninstalled successfully`);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to UnInstall this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, UnInstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "UnInstall!",
          text: `${title} uninstalled successfully`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mb-20 px-4 md:px-0">
      <div className="text-center my-6 md:my-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#001931]">Your Installed Apps</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Explore All the trending Apps Developed By us.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <p className="font-bold text-sm md:text-base">
          <span>({inst.length})</span> Apps Found
        </p>
        <label className="form-control w-full sm:w-auto max-w-xs">
          <select
            className="select select-bordered w-full text-sm md:text-base"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="downloads-asc">Low → High</option>
            <option value="downloads-desc">High → Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItems.map((saved) => (
          <div
            key={saved.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow gap-4"
          >
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <img
                src={saved.image}
                alt=""
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                  {saved.title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-3 mt-1 flex-wrap">
                  <div className="text-xs sm:text-sm text-green-600 flex gap-2">
                     <img className=' h-4' src={downloadImage} alt="" /> 
                    <p>{saved.downloads.toLocaleString()}</p>
                  </div>
                  <div className="text-xs sm:text-sm text-orange-500 flex gap-2">
                     <img className='h-3' src={ratingImage} alt="" />
                    <p>{saved.ratingAvg}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {saved.size} MB
                  </span>
                </div>
              </div>

            </div>
            <button
              onClick={() => handleDelete(saved.id, saved.title)}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 sm:px-6 py-2 rounded-md transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
      {inst.length === 0 && (
        <div className="text-center py-12 md:py-20">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] bg-clip-text text-transparent">
            No App Installed.
          </h1>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Browse our apps and install your favorites!
          </p>
        </div>
      )}
    </div>
  );
};

export default InstallApp;
