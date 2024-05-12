import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        getPopularMovies:(state,action)=>{
            state.popularMovies= action.payload;
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovies= action.payload;
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies= action.payload;
        },
    }
});
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies} = MovieSlice.actions;
export default MovieSlice.reducer;