import React from 'react';
import SSP_7251 from '../Assets/images/SSP_7251.jpeg';
import UserDetailsDropdown from './UserDetailsDropdown';

export default function Header() {
  const options = [];

  return (
    <div className='bg-[#e7f7fe] px-6 py-1 flex justify-between font-quicksand '>
      <div className='flex gap-1'>
        <div>
          <img className='h-[40px] rounded-full' src={SSP_7251} alt="User Avatar" />
        </div>
        <div>
          <UserDetailsDropdown options={options} />
        </div>
      </div>
    </div>
  );
}