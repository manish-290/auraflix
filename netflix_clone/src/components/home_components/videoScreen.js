import React from 'react';

const VideoScreen = () => {
  return (
    <div className="w-screen ">
      <iframe
         className="w-screen aspect-video"
         src="https://www.youtube.com/embed/KLuTLF3x9sA?si=tJWEZb1f-tZUO8WX&autoplay=1&mute=1"

          title="YouTube video player"
           frameborder="0" 
            allowfullscreen></iframe>
    </div>
  );
}

export default VideoScreen;