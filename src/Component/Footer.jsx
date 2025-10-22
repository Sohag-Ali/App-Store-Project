import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#001931] text-base-content p-6 sm:p-10">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-8 w-full max-w-7xl mx-auto">
        <span className="btn btn-ghost text-base sm:text-lg md:text-xl px-2 sm:px-4">
          <img className="h-6 w-6 sm:h-8 sm:w-8" src={logo} alt="Logo" />
          <span className="bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] bg-clip-text text-transparent  sm:inline-block overflow-hidden whitespace-nowrap  animate-typing">
            HERO.IO
          </span>
        </span>
        <nav className="text-center sm:text-left">
          <h6 className="footer-title text-white text-base sm:text-lg mb-3">
            Social Links
          </h6>
          <div className="flex justify-center sm:justify-start gap-4 text-white">
            <a
              href="https://www.facebook.com/"
              className="hover:opacity-70 transition-opacity"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/"
              className="hover:opacity-70 transition-opacity"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          
        </nav>
        
        
      </div>
      <div className="border-1 border-gray-700 w-full"></div>
      
      <aside className="footer sm:footer-horizontal footer-center p-4">
        <p className="text-white text-center ">
          Copyright © {new Date().getFullYear()} - All right reserved by Sohag Ali

          
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
