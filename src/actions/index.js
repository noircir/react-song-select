// Action creator (the person coming in with a form)

export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}