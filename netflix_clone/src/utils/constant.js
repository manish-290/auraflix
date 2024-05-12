export const API_END_POINT = 'http://localhost:8000/api/v1/user';

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGFhYWQ1NzljNGFhOTM5YmIxZTc1ZDMwODhhYzI1NiIsInN1YiI6IjY2M2ZhMTZmMWFlNDU4ZWIyZWU4NjRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I0PkvlNMcxjx5L1QJNx3rL1ZQoO9tnxDCa19iVQ6duE'
    }
  };

  export const Now_playing_movie="https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_movie ="https://api.themoviedb.org/3/movie/popular";
  export const Top_rated_movie="https://api.themoviedb.org/3/movie/top_rated";
  export const Upcoming_movie = "https://api.themoviedb.org/3/movie/upcoming";

  //tmdb image url path
  export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";