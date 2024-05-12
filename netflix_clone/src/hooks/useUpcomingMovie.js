import axios from "axios";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";
import { Upcoming_movie, options } from "../utils/constant";

const useUpcomingMovies = async ()=>{
    const dispatch = useDispatch();
    try{
        const res  = await axios.get(Upcoming_movie,options);
        dispatch(getUpcomingMovies(res.data.results));
    }catch(error){
        console.log(error);
    }
}

export default useUpcomingMovies;