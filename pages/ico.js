import Image from 'next/image';
import React from 'react';
import ICOImg from '../public/assets/projects/ICO.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ICO = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={ICOImg}
            alt='/'
          />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Clubhouse 2.0</h2>
          <h3>NReact JS / HTML / CSS / JavaScript, Material UI</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <div>
            <p>Build a front-end Clubhouse+ Website</p>
            <p>Clubhouse is a place where you can hang out with friends, meet new ones, and talk about anything </p>
            <ul>
              <li>A Responsive Clubhouse front end react application.</li>
              <li>Used React styled components for styling using CSS</li>
              <li><p>React-Redux for state management</p></li>
              <li>React-bottom swipeable sheet package use for carousel ,slider effect</li>
              <li>There is a website that users can visit for the ICO.</li>
              <li>Material UI for fonts</li>
            </ul>
          </div>
          <Link
            href='https://github.com/ashuxshimra/ClubhouseApp'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
          <Link
            href='https://clubhouseapp-31783.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </Link>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Js 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hardhat
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Solidity
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ICO;