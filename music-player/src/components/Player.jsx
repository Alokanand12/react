import React, { useContext, useEffect, useRef } from "react";
import { Music } from "../context/SongContext";
import { Pause, Play } from "lucide-react";

const Player = () => {
  let { song, setIsPlaying, isPlaying } = useContext(Music);
  let audioRef = useRef();

  useEffect(() => {
    audioRef.current?.play();
  }, [song]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="absolute bottom-2 left-[50%]">
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="h-15 w-15 flex justify-center items-center cursor-pointer rounded-full bg-black"
      >
        {isPlaying ? <Pause color="green" /> : <Play color="green" />}
      </button>
      <audio ref={audioRef} src={song?.url}></audio>
    </div>
  );
};

export default Player;
