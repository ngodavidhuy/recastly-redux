import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    let newState = Object.assign({}, action.video);
    return newState;
  }
  return state;
};

export default currentVideoReducer;
