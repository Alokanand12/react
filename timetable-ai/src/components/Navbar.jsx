export default function Navbar({ user, onLogout }) {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-black/20 backdrop-blur-md border-b border-white/10 text-white">
      <h1 className="text-xl font-bold tracking-wide">🚀 AI Scheduler</h1>
      <div className="flex items-center gap-4">
        {user && (
          <span className="text-sm opacity-70 hidden sm:block">
            👤 {user.email}
          </span>
        )}
        <button
          onClick={onLogout}
          className="px-4 py-1.5 rounded-lg bg-red-500/70 hover:bg-red-600 text-sm font-medium transition hover:scale-105"
        >
          Logout 🚪
        </button>
      </div>
    </div>
  );
}