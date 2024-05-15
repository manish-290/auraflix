import axios from 'axios';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {  getTeaserMovie } from '../redux/movieSlice';
import { useEffect } from 'react';

const UseMovieById = async(movieId) => {
    const dispatch = useDispatch();
  
    useEffect(()=>{
      const getMovieById = async()=>{
        try{
    
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options);
        console.log(res.data.results);
        const teaser = res?.data?.results?.filter((item)=>{
          return  item.type ==="Teaser" || item.type==="Clip"|| item.type==="Trailer";
              
        });
        dispatch(getTeaserMovie(teaser.length > 0 ? teaser[0] : res.data.results[0]));
      }catch(error){
          console.log("cannot fetch the video by id");
        }
      }
      getMovieById();
      //eslint-disable-next-line
    },[])
}

export default UseMovieById;