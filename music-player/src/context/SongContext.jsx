import { createContext, useState } from "react";

export let Music = createContext();

export let MusicContextProvider = ({ children }) => {
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Music.Provider
      value={{
        song,
        setSong,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </Music.Provider>
  );
};
