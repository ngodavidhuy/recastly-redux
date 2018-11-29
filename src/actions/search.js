import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// var beginVideoSearch = () => ({
//   type: BEGIN_VIDEO_SEARCH
// });

// var videoSearchSuccess = videos = () => ({
//   type: VIDEO_SEARCH_SUCCESS,
//   payload: {videos}
// }) 

// var videoSearchFailure = error => ({
//   type: FETCH_PRODUCTS_FAILURE,
//   payload: {error}
// })

var handleVideoSearch = (q) => {
  // let options = {}

  // return (dispatch) => {
  //   dispatch(videosAreLoading(true));

  //   fetch(s)
  
  // }
  //TODO:  Write an asynchronous action to handle a video search!
  // type: 'SEARCH_SUCCESS',
  // videos: () => {
  //   return (dispatch) => {
  //     dispatch(searchYoutube({YOUTUBE_API_KEY, q}, () => {
  //       dispatch()
  //     });
  //   }
  // }

};

export default handleVideoSearch;
