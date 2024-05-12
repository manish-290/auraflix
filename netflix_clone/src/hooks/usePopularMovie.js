import axios from "axios";
import { Popular_movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";

const usePopularMovies = async ()=>{
    const dispatch = useDispatch();
    try{
        const res  = await axios.get(Popular_movie,options);
        dispatch(getPopularMovies(res.data.results));
    }catch(error){
        console.log(error);
    }
}

export default usePopularMovies;