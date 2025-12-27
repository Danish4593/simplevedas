import React, { useState } from "react";
import {
  LockClosedIcon,
  KeyIcon,
  HeartIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";
import LoginModal from "../pages/modal/LoginModal";
import RegisterModal from "../pages/modal/RegisterModal";

const FirstNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginOpen = () => setLoginModalOpen(true);
  const handleLoginClose = () => setLoginModalOpen(false);
  const handleRegisterOpen = () => setRegisterModalOpen(true);
  const handleRegisterClose = () => setRegisterModalOpen(false);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <div className="bg-[#FFC13C] py-5 md:py-5 px-4 md:px-5 lg:px-8 shadow-none">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          {/* Desktop View */}
          <div className="hidden md:flex justify-between items-center">
            {/* Left Side - Contact Info */}
            <div className="flex gap-6 md:gap-8 items-center mr-6">
              <span
                className="text-gray-800 hover:text-[#800000] transition-colors"
                style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
              >
                +91 99873 18251
              </span>
              <a
                href="mailto:info@simplevedas.com"
                className="text-gray-800 hover:text-[#800000] transition-colors"
                style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
              >
                info@simplevedas.com
              </a>
            </div>

            {/* Right Side - Login/Register/Support or Logout/Support */}
            {!isLoggedIn ? (
              <div className="flex gap-10 items-center mr-1">
                {/* Login */}
                <div
                  className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handleLoginOpen}
                >
                  <LockClosedIcon className="w-6 h-6 text-[#800000]" />
                  <span 
                    className="text-[#800000] cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px' }}
                  >
                    Login
                  </span>
                </div>

                {/* Register */}
                <div
                  className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handleRegisterOpen}
                >
                  <KeyIcon className="w-6 h-6 text-gray-800" />
                  <span 
                    className="text-gray-800 cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
                  >
                    Register
                  </span>
                </div>

                {/* Support Us */}
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                  <HeartIcon className="w-6 h-6 text-[#800000]" />
                  <span 
                    className="text-[#800000] cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', fontWeight: '400' }}
                  >
                    Support Us
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex gap-10 items-center">
                {/* Logout */}
                <div
                  className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handleLogout}
                >
                  <LockOpenIcon className="w-4 h-4 text-gray-800" />
                  <span 
                    className="text-gray-800 cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
                  >
                    Logout
                  </span>
                </div>

                {/* Support Us */}
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                  <HeartIcon className="w-4 h-4 text-[#800000]" />
                  <span 
                    className="text-[#800000] cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px' }}
                  >
                    Support Us
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile View - Register/Login on Left, Support on Right */}
          <div className="flex md:hidden justify-between items-center">
            {!isLoggedIn ? (
              <>
                {/* Left Side - Phone Number, Register and Login */}
                <div className="flex gap-3 items-center flex-wrap">
                  <span
                    className="text-gray-800 hover:text-[#800000] transition-colors"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
                  >
                    +91 99873 18251
                  </span>
                  <div className="flex gap-4 items-center">
                  {/* Register */}
                  <div
                    className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleRegisterOpen}
                  >
                    <KeyIcon className="w-4 h-4 text-gray-800" />
                    <span 
                      className="text-gray-800 cursor-pointer"
                      style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
                    >
                      Register
                    </span>
                  </div>

                  {/* Login */}
                  <div
                    className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleLoginOpen}
                  >
                    <LockClosedIcon className="w-4 h-4 text-[#800000]" />
                    <span 
                      className="text-[#800000] cursor-pointer"
                      style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px' }}
                    >
                      Login
                    </span>
                  </div>
                  </div>
                </div>

                {/* Right Side - Support Us */}
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                  <HeartIcon className="w-4 h-4 text-[#800000]" />
                  <span 
                    className="text-[#800000] cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px' }}
                  >
                    Support Us
                  </span>
                </div>
              </>
            ) : (
              <>
                {/* Left Side - Phone Number and Logout */}
                <div className="flex gap-3 items-center flex-wrap">
                  <span
                    className="text-gray-800 hover:text-[#800000] transition-colors"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
                  >
                    +91 99873 18251
                  </span>
                  <div
                    className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleLogout}
                  >
                  <LockOpenIcon className="w-4 h-4 text-gray-800" />
                  <span 
                    className="text-gray-800 cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px', color: '#000000' }}
                  >
                    Logout
                  </span>
                  </div>
                </div>

                {/* Right Side - Support Us */}
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                  <HeartIcon className="w-4 h-4 text-[#800000]" />
                  <span 
                    className="text-[#800000] cursor-pointer"
                    style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '31px' }}
                  >
                    Support Us
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <LoginModal open={loginModalOpen} handleClose={handleLoginClose} />
      <RegisterModal
        open={registerModalOpen}
        handleClose={handleRegisterClose}
      />
    </>
  );
};

export default FirstNavbar;