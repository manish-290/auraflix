import React from 'react';
import { TMDB_IMG_URL } from '../../utils/constant';

const MovieCard = ({posterPath, title}) => {
  return (
    <div className='w-80 pr-2'>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="chamkila banner" />
      <div>
        <h1 className='text-white font-bold text-2xl'>{title}</h1>
      </div>
    </div>

  );
}

export default MovieCard;