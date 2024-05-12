import axios from "axios";
import { Now_playing_movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies= async()=>{
    const dispatch = useDispatch();
    try{
      const res = await axios.get(Now_playing_movie,options);
      console.log( res.data.results);
      dispatch(getNowPlayingMovies(res.data.results))
    }catch(error){
      console.log(error);
    }
  }
  export default useNowPlayingMovies;