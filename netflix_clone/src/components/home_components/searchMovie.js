import React from 'react';

const SearchMovie = () => {
  return (
    <div className='flex pt-[10%] justify-center w-[100%]'>
      <form className='w-[50%]'>
        <div className='border-2 border-gray-300 w-[100%] flex justify-between shadow-md p-2 rounded-lg '>
        <input className='w-full mr-2 outline-none text-lg font-bold' type="text" placeholder='Search Movies...' />
        <button className='bg-red-700 font-bold text-white px-4 py-2 rounded-lg' type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchMovie;