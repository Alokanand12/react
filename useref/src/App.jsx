import React, { useRef } from "react";

const App = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const resetAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Audio Player</h2>

      <audio ref={audioRef} src="/alok.mp3"></audio>

      <div style={{ marginTop: "20px" }}>
        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio} style={{ marginLeft: "10px" }}>
          Pause
        </button>
        <button onClick={resetAudio} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;