import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import songs from "../data/song";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    // Synchronize play/pause with state
    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Playback prevented:", error);
                    setIsPlaying(false);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentSong]);

    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        setIsPlaying(!isPlaying);
    };

    const playSong = (song) => {
        if (!audioRef.current) return;

        if (currentSong.id === song.id) {
            togglePlay();
        } else {
            setCurrentSong(song);
            setIsPlaying(true);
        }
    };

    return (
        <div className="min-h-screen pb-32 pt-10 relative overflow-x-hidden">
            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="w-full px-6 space-y-6">
                <div className="flex flex-col items-center mb-10">
                    <h1 className="text-4xl font-black tracking-widest text-yellow-500 ">
                        SONG PLAYER
                    </h1>

                </div>

                {/* Song List Container */}
                <div className="space-y-4 max-h-[85vh] overflow-y-auto custom-scrollbar pb-10">
                    {songs.map((song) => (
                        <div
                            key={song.id}
                            onClick={() => playSong(song)}
                            className={`song-card flex items-center justify-between p-3 md:p-4 cursor-pointer group ${currentSong.id === song.id ? 'active' : ''}`}
                        >
                            {/* Song Image */}
                            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 relative">
                                <img
                                    src={song.image}
                                    alt={song.title}
                                    className={`w-full h-full object-cover rounded-xl border-2 transition-all ${currentSong.id === song.id ? 'border-emerald-500' : 'border-white/10'}`}
                                />
                                {currentSong.id === song.id && isPlaying && (
                                    <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                                        <div className="flex gap-1 items-end h-3">
                                            <div className="bar h-full animate-[bounce_1s_infinite]" />
                                            <div className="bar h-2/3 animate-[bounce_1s_infinite_0.2s]" />
                                            <div className="bar h-1/2 animate-[bounce_1s_infinite_0.4s]" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Centered Details */}
                            <div className="flex-1 px-4 text-center overflow-hidden">
                                <h3 className={`font-bold truncate transition-colors ${currentSong.id === song.id ? 'text-emerald-400' : 'text-white'}`}>
                                    {song.title}
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm truncate mt-0.5">
                                    {song.artist}
                                </p>
                            </div>

                            {/* Right Play Indicator */}
                            <div className="flex-shrink-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentSong.id === song.id ? 'bg-emerald-500 text-black scale-110' : 'bg-white/5 text-white group-hover:bg-white/20'}`}>
                                    {currentSong.id === song.id && isPlaying ? (
                                        <Pause size={18} fill="currentColor" />
                                    ) : (
                                        <Play size={18} fill="currentColor" className="ml-1" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Floating Play Button */}
            <button onClick={togglePlay} className="bottom-play-btn group active:scale-90">
                <div className="relative">
                    {isPlaying ? (
                        <Pause size={30} color="black" fill="black" />
                    ) : (
                        <Play size={30} color="black" fill="black" className="ml-1" />
                    )}
                </div>
            </button>

            <audio
                ref={audioRef}
                src={currentSong.audio}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
            />
        </div>
    );
}
