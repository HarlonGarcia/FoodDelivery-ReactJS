import React from "react";
import Navbar from "../components/Navbar";
import OrderContainer from "../components/Order/OrderContainer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="w-5/6 mx-auto">
        <OrderContainer />
      </div>
    </main>
  );
};

export default Home;
