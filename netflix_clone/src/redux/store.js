import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import movieReducer from './movieSlice';
const store = configureStore({
    //inside store we have multiple reducer
    reducer:{
       app: userReducer,
       movie:movieReducer
    }
});

export default store;
