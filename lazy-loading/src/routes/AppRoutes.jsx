import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
let Home = lazy(() => import("../pages/Home"));
let About = lazy(() => import("../pages/About"));
let Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<h1>loading contact....</h1>}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
