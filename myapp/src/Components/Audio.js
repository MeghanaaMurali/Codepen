import React, { useEffect } from "react";

import song1 from "../Components/song1.mp3";
import song2 from "../Components/song2.mp3";
import song3 from "../Components/song3.mp3";
import song4 from "../Components/song4.mp3";
import song5 from "../Components/song5.mp3";
import song6 from "../Components/song6.mp3";
import song7 from "../Components/song7.mp3";
import song8 from "../Components/song8.mp3";
import song9 from "../Components/song9.mp3";
import song10 from "../Components/song10.mp3";
import "./Audio.css";
import Songs from "./Songs";

const Audio = () => {
  function play(sound) {
    var audio = document.getElementsByTagName("audio");
    audio.setAttribute("src", sound);
    audio.play();
  }
  return (
    <div className="bg">
      <div className="header">
        <h2>Playlist</h2>
        <div className="dj">
          <h1>DJ Hype On Kiss -10.01.2013</h1>
          <hr className="hor" />
          <article>
            <section class="region" data-title="Playlist"></section>

            <section class="bigger">
              <div class="column">
              
                <audio src={song1} controls />
                <audio src={song2} controls />
                <audio src={song3} controls />
                <audio src={song4} controls /> 
                <audio src={song5} controls />
                <audio src={song6} controls />
                <audio src={song7} controls />
                <audio src={song8} controls /> 
                <audio src={song9} controls />
                <audio src={song10} controls /> 
                <p>
                  <a
                    href="https://soundcloud.com/realplayaz/dj-hype-kiss-10-01-2013"
                    target="_blank"
                    className="anchor"
                  >
                    soundcloud.com/realplayaz/dj-hype-kiss-10-01-2013
                  </a>
                </p>

                <p className="para">
                  DJ Hype brings you the latest upfront drum n bass tunes every
                  Wednesday at midnight. One of the UK’s best plays an hour of
                  heavy jungle and drum & bass with the scene’s biggest DJs,
                  producers and MCs passing through.
                </p>
              </div>
            </section>

            <section class="region" data-title="Playlist"></section>
          </article>
        </div>
        <h2>Playlist</h2>
      </div>
      <div class="playlist">
        <Songs num="1" title="Choosane Kallara" source={song1} />
        <Songs num="2" title="Krishna Trance" source={song2} />
        <Songs num="3" title="Aradhya" source={song3} />
        <Songs num="4" title="Yamuna Thatilo" source={song4} />
        <Songs num="5" title="Jaamu Rathiri" source={song5} />
        <Songs num="6" title="Nalone Pongenu" source={song6} />
        <Songs num="7" title="Monna kanipinchavu" source={song7} />
        <Songs num="8" title="Ekkada Ekkada" source={song8} />
        <Songs num="9" title="Alanati Ramachandrudu" source={song9} />
        <Songs num="10" title="Bangaru Kalla" source={song10} />
      </div>
    </div>
  );
};

export default Audio;
