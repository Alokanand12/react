import React, { lazy, Suspense } from "react";
// import Card from "../components/Card";
let Card = lazy(() => import("../components/Card"));

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Suspense fallback={<h1>Loading card...</h1>}>
        <Card />
      </Suspense>
    </div>
  );
};

export default Home;
