import React from 'react';
import { AiFillCodepenCircle } from 'react-icons/ai';
// import { BiLogOutCircle } from 'react-icons/bi';
import { SidebarData } from '../Data/SidebarData';
import { Link, useLocation } from 'react-router-dom';
// import SSP_7251 from '../Assets/images/SSP_7251.JPG';

export default function Sidebar() {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className='bg-[#1c2537] top-0 z-10 left-0 text-[#e3e4e6] h-screen w-[250px] px-3 pt-10 font-quicksand relative'>
        <div className='fixed top-0 left-0 bg-[#1c2537] text-[#e3e4e6] h-screen w-[250px] px-3 pt-10 font-quicksand '>
            <Link to='/dashboard'>
            <div className='flex gap-3'>
                <div>
                <AiFillCodepenCircle className='text-[50px]' />
                </div>
                <div className='mt-3'>GAMES PLAN</div>
            </div>
            </Link>
            <div className='py-6 text-[#9ea1a7]'>Menu</div>
            <div className='overflow-y-auto max-h-[calc(100vh-200px)]'>
            {SidebarData.map((item) => (
                <Link to={item.path} key={item.name}>
                    <div className={`${active === item.path ? 'bg-[#293751]' : null} flex gap-4 hover:bg-[#293751] p-4 rounded-xl`}>
                        <div className='text-[22px]'>{item.icons}</div>
                        <div>{item.name}</div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    </div>

  );
}