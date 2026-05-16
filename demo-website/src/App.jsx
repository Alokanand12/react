import { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  const auth = useContext(AuthContext);

  const user = { name: "test" };
  const setUser = auth?.setUser;

 const [page, setPage] = useState("home");
  const [category, setCategory] = useState("all");

  // return (
  //   <div className="bg-black min-h-screen text-white">

  //     {user && <Navbar setPage={setPage} setUser={setUser} />}

  //     {!user && page === "login" && <Login setPage={setPage} />}
  //     {!user && page === "register" && <Register setPage={setPage} />}

  //     {user && page === "home" && (
  //       <Home setPage={setPage} setCategory={setCategory} />
  //     )}

  //     {user && page === "shop" && <Shop category={category} />}
  //     {user && page === "cart" && <Cart />}
  //     {user && page === "about" && <About />}
  //   </div>
  // );


}

export default App;