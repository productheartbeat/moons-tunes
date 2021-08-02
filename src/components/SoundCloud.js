import React from 'react'

const SoundCloud = (props) => (
  <div>
    <iframe title="SoundCloud Player" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+props.sc_id+"&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}></iframe><div style={{fontSize: "10px;", color: "#cccccc;", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/moonstunes" title="d.chandler.moon" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>d.chandler.moon</a> · <a href={"https://soundcloud.com/moonstunes/"+props.sc_slug} title={props.sc_title} target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>{props.sc_title}</a></div>
  </div>
)

export default SoundCloud;