import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        // console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return { songs: state.songs };
}

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// {selectSong} is [mapDispatchToProps] ===> will be merged into component's props

// The key 'selectSong' is our handler method; the value 'selectSong' is the 
// action creator that we imported.

export default connect(mapStateToProps, {selectSong: selectSong})(SongList);