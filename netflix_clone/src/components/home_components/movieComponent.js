import React from 'react';
import MovieList from '../movieList';
import {useSelector} from 'react-redux';

const MovieComponent = () => {
  const movie = useSelector(store=>store.movie);
  console.log(movie);
  return (
    <div className='bg-black'>
      <div className='-mt-40 relative z-10'>
      <MovieList title={"Popular Movies"} movies={movie.popularMovies}/>
      <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
      
    </div>
  );
}

export default MovieComponent;