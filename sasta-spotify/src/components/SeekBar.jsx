import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../features/songReducer";

const SeekBar = () => {
  let dispatch = useDispatch();
  let { isPlaying } = useSelector((store) => store.music);

  return (
    <div className=" flex flex-col gap-2 left-1/2 top-10">
      <div className="flex gap-4 items-center">
        <SkipBack />
        {isPlaying ? (
          <div
            onClick={() => dispatch(pause())}
            className="w-12 h-12 bg-black flex justify-center rounded-full items-center"
          >
            <Pause color="white" />
          </div>
        ) : (
          <div
            onClick={() => dispatch(play())}
            className="w-12 h-12 bg-black flex justify-center rounded-full items-center"
          >
            <Play color="white" />
          </div>
        )}
        <SkipForward />
      </div>
      <div></div>
    </div>
  );
};

export default SeekBar;
