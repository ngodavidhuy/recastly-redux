import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    let newState = [].concat(action.videos);
    return newState;
  }

  return state;
};

export default videoListReducer;
