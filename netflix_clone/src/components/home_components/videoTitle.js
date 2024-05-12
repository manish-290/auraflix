import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
const VideoTitle = () => {
  return (
    <div className='absolute  text-white pt-[18%] pl-10 w-screen aspect-video'>
      <h1 className='text-3xl font-bold'>Norway 4K • Scenic Relaxation Film</h1>
      <p className='w-[50%]'>12 hours of healing music and relaxation with beautiful views of Norway in 4K Ultra HD </p>
      <div className=' mt-10 flex'>
        <button className=' bg-white hover:bg-opacity-80 text-black font-bold px-6 py-2  flex items-center rounded-md '><FaPlay size="24px"/><span> Play</span></button>
        <button className=" bg-gray-300 bg-opacity-50 hover:bg-opacity-80 text-black flex items-center font-bold px-6 py-2  rounded-md ml-2 "><IoInformationCircleSharp size="24px"/> <span> Watch More</span></button>
      </div>
    </div>
  );
}

export default VideoTitle;