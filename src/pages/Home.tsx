import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import OrderContainer from "../components/Order/OrderContainer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="w-5/6 mx-auto">
        <OrderContainer />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
