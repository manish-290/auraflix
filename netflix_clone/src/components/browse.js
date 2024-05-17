import React, { useEffect } from 'react';
import Header from './header';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainComponent from './home_components/mainComponent';
import MovieComponent from './home_components/movieComponent';
import useNowPlayingMovies from '../hooks/useNowPlayingMovie';
import usePopularMovies from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovie';
import SearchMovie from './home_components/searchMovie';

const Browse = () => {
const navigate = useNavigate();
  const user = useSelector((store)=>store.app.user);  
  const toggle = useSelector((store)=>store.movie.searchToggle);
  //now playing movies custom hook
  useNowPlayingMovies();
  //popular movie custom hook
  usePopularMovies();
  //top rated movie custom hook
  useTopRatedMovies();
  //upcoming movie custom hook
  useUpcomingMovies();
 

  useEffect(()=>{
    if(!user){
      navigate('/');
    }
  })
 
  return (
    <div>
        <Header/>
       
        <div>
          {
          toggle? <SearchMovie/>:(
            <>
              <MainComponent/>
              <MovieComponent/>
            </>
          )
          
        }

        </div>
      
    </div>
  );
}

export default Browse;