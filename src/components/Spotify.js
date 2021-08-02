import React from 'react'

const Spotify = (props) => (
  <div>
    <iframe title="Spotify Player" src={"https://open.spotify.com/embed/track/"+props.spotify_id+"?theme=0"} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
)

export default Spotify;