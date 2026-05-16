const Navbar = ({ setPage, setUser }) => {
  return (
    <div className="fixed top-0 w-full bg-black flex justify-between px-6 py-4 border-b">

      <h1 className="text-green-400 font-bold">⚡ SkyMart</h1>

      <div className="flex gap-6">
        {["home", "shop", "about", "cart"].map((item) => (
          <button key={item} onClick={() => setPage(item)}>
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          setUser(null);
          setPage("login");
        }}
        className="bg-green-400 text-black px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;