import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // ✅ Demo login (always works)
    if (email === "admin@gmail.com" && password === "1234") {
      setUser({ email });
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
    } catch (err) {
      console.error(err);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-80 text-white">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Login 🔐</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-white/20 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-white/20 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-105 transition"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center opacity-70">
          Demo: admin@gmail.com / 1234
        </p>

      </div>
    </div>
  );
}