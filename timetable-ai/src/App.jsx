import { useState } from "react";

import Navbar from "./components/Navbar";
import TimetableGrid from "./components/TimetableGrid";
import Loader from "./components/Loader";
import WorkloadChart from "./components/WorkloadChart";
import Login from "./pages/Login";

import { generateTimetable } from "./utils/scheduler";
import { exportPDF } from "./utils/exportPDF";
import { data } from "./data/sampleData";

export default function App() {
  const [user, setUser] = useState(null);
  const [table, setTable] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔐 LOGIN SCREEN
  if (!user) {
    return <Login setUser={setUser} />;
  }

  // ⚡ GENERATE FUNCTION
  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      const result = generateTimetable(data);
      setTable(result);
      setLoading(false);
    }, 1000);
  };

  // 🚪 LOGOUT
  const handleLogout = () => {
    setUser(null);
    setTable(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">

      {/* Navbar with logout */}
      <Navbar user={user} onLogout={handleLogout} />

      {/* Buttons */}
      <div className="p-4 flex gap-3 justify-center flex-wrap">
        <button
          onClick={handleGenerate}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 font-semibold hover:scale-105 transition shadow-lg"
        >
          ⚡ Generate Timetable
        </button>

        {table && (
          <button
            onClick={exportPDF}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 font-semibold hover:scale-105 transition shadow-lg"
          >
            📄 Export PDF
          </button>
        )}
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Empty State */}
      {!table && !loading && (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 opacity-70">
          <p className="text-5xl">📅</p>
          <p className="text-xl font-semibold">
            Click "Generate Timetable" to get started!
          </p>
          <p className="text-sm">Logged in as: {user?.email}</p>
        </div>
      )}

      {/* Timetable + Chart */}
      {table && (
        <>
          <TimetableGrid timetable={table} setTimetable={setTable} />
          <WorkloadChart timetable={table} />
        </>
      )}
    </div>
  );
}