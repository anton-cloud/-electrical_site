import React from "react";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";

const App = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const openModal = () => setOpenModal((prev) => !prev);
  return (
    <BrowserRouter>
      <Header isOpenModal={isOpenModal} openModal={openModal} />
      <Main isOpenModal={isOpenModal} openModal={openModal} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
