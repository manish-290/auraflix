import React from 'react';
import UseMovieById from '../../hooks/useVideoById';
import { useSelector } from 'react-redux';

const VideoScreen = ({movieId}) => {
const teaserMovie = useSelector((store)=>store.movie.teaserMovie);
  UseMovieById(movieId);
  return (
    <div className="w-screen ">
      <iframe
         className="w-screen aspect-video"
         src={`https://www.youtube.com/embed/${teaserMovie?.key}?si=tJWEZb1f-tZUO8WX&autoplay=1&mute=1`}

          title="YouTube video player"
           frameBorder="0" 
            allowFullscreen></iframe>
    </div>
  );
}

export default VideoScreen;