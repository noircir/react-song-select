// The 'combineReducers' (function from Redux) bundles
// reducers together into a cohesive chunk (which is a state)
// (the store is created on the Provider level, in the wrapper around App)

import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'All Star', duration: '3:15'},
        { title: 'I Want It That Way', duration: '1:45'},
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})