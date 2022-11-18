import React, { useContext, useEffect } from "react";
import { StatusContext } from "../../context/StatusContext";
import "./Footer.css";

const Footer = () => {
  const { setCurrentStatus } = useContext(StatusContext);

  return (
    <footer className="fixed bottom-0 w-full bg-orange text-white font-inter text-sm font-black sm:hidden">
      <div
        className="inline text-center items-center transition-all"
        onClick={() => setCurrentStatus("WAITING")}
      >
        <span className="inline-block py-6 w-4/12">ESPERA</span>
      </div>
      <div
        id="production"
        className=" inline text-center items-center"
        onClick={() => setCurrentStatus("IN_PRODUCTION")}
      >
        <span className="inline-block py-6 w-4/12">PRODUÇÃO</span>
      </div>
      <div
        id="done"
        className=" inline text-center items-center"
        onClick={() => setCurrentStatus("DONE")}
      >
        <span className="inline-block py-6 w-4/12">FEITO</span>
      </div>
      <div id="line"></div>
    </footer>
  );
};

export default Footer;
