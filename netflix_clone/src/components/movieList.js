import React from 'react';
import MovieCard from './home_components/movieCard';


const MovieList = ({title,movies}) => {
 
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-bold text-white py-5'>{title}</h1>
      <div className='overflow-x-auto flex cursor-pointer no-scrollbar' >
      <div className='flex items-center '>
       {
         movies?.map((movie)=>{
          return(
            <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.original_title}/>
          )
         })
       }
        
      </div>
      </div>
    
    </div>
  );
}

export default MovieList;