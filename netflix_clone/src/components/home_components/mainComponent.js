import React from 'react';
import VideoScreen from './videoScreen';
import VideoTitle from './videoTitle';
import { useSelector } from 'react-redux';

const MainComponent = () => {
  const movie = useSelector((store)=>store.movie?.nowPlayingMovies);
  if(!movie) return ;//early return if not found the movie

  const {id,title,overview}= movie[1];
  
  return (
    <div>
        <VideoTitle title={title} description={overview}/>
      <VideoScreen movieId={id}/>
    </div>
  );
}

export default MainComponent;