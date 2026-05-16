import React from "react";
import musics from "../utils/songs.json";
import SongCard from "../components/SongCard";
import { nanoid } from "nanoid";
import { useSongs } from "../hooks/useSongs";

const HomePage = () => {
  let { handlePlay } = useSongs();
  let songs = musics.map((elem) => {
    return { ...elem, id: nanoid() };
  });

  return (
    <div className="flex flex-wrap gap-5">
      {songs.map((elem) => {
        return <SongCard handlePlay={handlePlay} key={elem.id} song={elem} />;
      })}
    </div>
  );
};

export default HomePage;
