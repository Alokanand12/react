import { useSongs } from "../hooks/useSongs";

const SongCard = ({ song, handlePlay }) => {
  

  return (
    <div
      onClick={() => handlePlay(song)}
      className="w-56 border shadow-md p-4 rounded-xl hover:bg-gray-400 transition duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
        <img
          src={song.thumbnail} // replace with your image
          alt="Discover Weekly"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="font-semibold text-lg mb-1">{song.title}</h2>

      {/* Artist */}
      <p className="text-gray-400 text-sm leading-snug">{song.artist}</p>
    </div>
  );
};

export default SongCard;
