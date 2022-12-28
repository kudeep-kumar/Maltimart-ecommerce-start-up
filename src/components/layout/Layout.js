import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Routers from "../../routers/Routers";

const layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default layout;
