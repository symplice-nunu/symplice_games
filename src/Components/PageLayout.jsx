import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {FaQuestionCircle} from 'react-icons/fa';

export default function PageLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [data, setData] = useState({
    flashMessage: true,
  })
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex font-quicksand'>
        <div>{showSidebar && <Sidebar />}</div>
        <div className='relative w-full bg-[#f6f6f6]'>
          <div className='flex justify-between bg-[#e7f7fe]'>
                <div onClick={toggleSidebar}>
                <GiHamburgerMenu className='mt-4 mx-4' />
                </div>
                <div>
                <Header />
                </div>
          </div>
          <div className='px-2'>
          {
                    data.flashMessage && <div className="flex bg-orange-200 px-8 py-8 text-orange-500 rounded-2xl">
                        <div>
                          <div>
                            <span className="mb-2 flex">
                                <span className='mt-1 pr-2'>
                                    <FaQuestionCircle />
                                </span>
                                <b>Announcement!</b>
                            </span>
                          </div>
                          <div>
                            ChainPoint Support will be upgraded to release 6.10 on Wednesday 6 April. Thanks to the use of slot deployment functionality no outage time is expected. After the upgrade a new message will be posted here.
                            ChainPoint Support Team, 20.03.23
                          </div>
                        </div>
                        <div onClick={() => setData({ ...data, flashMessage: false })} className='text-2xl cursor-pointer'>
                          <FaRegTimesCircle />
                        </div>
                    </div>
          }
          </div>
          <div>
            <Outlet />
          </div>
          <div className='absolute bottom-0 w-full'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}