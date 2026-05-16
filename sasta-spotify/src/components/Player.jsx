import React from "react";
import { useSelector } from "react-redux";
import SeekBar from "./SeekBar";

const Player = () => {
  let { isPlaying, currentSong } = useSelector((store) => store.music);

  return (
    <div className="p-2 relative h-full flex justify-between items-center">
      <div className="flex gap-5">
        <div className="w-15">
          <img src={currentSong?.thumbnail} alt="" />
        </div>
        <div>
          <h1>{currentSong?.title}</h1>
          <p>{currentSong?.artist}</p>
        </div>
      </div>
      <SeekBar />
      <div></div>
    </div>
  );
};

export default Player;
