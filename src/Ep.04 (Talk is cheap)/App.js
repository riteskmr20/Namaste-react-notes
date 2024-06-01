import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header"
import Body from "../components/Body";
import ResturantCard from "../components/ResturantCard";
// import LogoImage from "./Img/Logo.png";

/**
 * Header
 *   -logo
 *   -Nav bar
 * Body
 *  -search
 *  -ResturantContainer
 *     -ResturantCard
 *        -Img
 *        -Name of Res,Star Rating,cuisins,etc.
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */










 


















const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
