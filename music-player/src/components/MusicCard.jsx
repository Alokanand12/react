import React, { useContext, useRef } from "react";
import { Music } from "../context/SongContext";
import { Pause, Play } from "lucide-react";

const MusicCard = ({ gana }) => {
  let { setSong, song, setIsPlaying } = useContext(Music);

  return (
    <div className="px-10 py-3 rounded-xl border border-gray-500 flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <div>
          <img width={40} src={gana.thumbnail} alt="" />
        </div>
        <div>
          <h1 className=" text-md">{gana.title}</h1>
          <h1 className="text-sm text-gray-600">{gana.artist}</h1>
        </div>
      </div>

      <div>
        <button
          className="h-10 w-10 flex justify-center items-center cursor-pointer rounded-full bg-black"
          onClick={() => {
            setSong(gana);
            setIsPlaying(true);
          }}
        >
          {song?.id === gana.id ? (
            <Pause color="white" size={15} />
          ) : (
            <Play color="white" size={15} />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
