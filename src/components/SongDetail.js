import React from 'react';
import { connect } from 'react-redux';



const SongDetail = ({ song }) => {

    console.log(song);
    if (song !== null) {
       return (
           <div>
                <h3>Details for:</h3>
               <p>Title: {song.title}</p>
               <p>Duration: {song.duration}</p>
            </div>
       )
   }

   return "Please select a song..."
};
const mapStateToProps = state => {
    // console.log(state.selectedSong);
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);