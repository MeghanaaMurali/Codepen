import React from "react";
// import song from '../src/song.mp3';
import './Songs.css';

const Songs = ({num,title,source}) => {
    function downloadHandler() {   
        const downloadLink = document.createElement("a");
        downloadLink.style.display = "none";
        downloadLink.href = source; 
        downloadLink.download = `${title}.mp3`;  
        downloadLink.click();
      }
  return (
    <div>
      <div className="song">
        <div className="audio">
          <p className="num">{num}</p>
          <p className="name">{title}</p>
        </div>
        <img
          src="https://media.istockphoto.com/id/931778082/vector/download-button-vector-icon.jpg?s=612x612&w=0&k=20&c=-SWrynGUHE9RX5j1IfqyDGREWnV4uUIGWodUiY3xdBs="
          alt="download"
          className="download"
          onClick={downloadHandler}
        />
      </div>
    </div>
  );
};

export default Songs;
