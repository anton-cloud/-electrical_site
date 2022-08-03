import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const App = () => {

  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenApp, setOpenApp] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const breakPoint = 1024;
  const isDesktop = viewportWidth >= breakPoint;

  const handleShow = () => setOpenApp((prev) => !prev);
  const openModal = () => setOpenModal((prev) => !prev);
  const handleResizeWindow = () => setViewportWidth(window.innerWidth);


  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
  }, []);

  return (
    <BrowserRouter>

      <Header isOpenModal={isOpenModal} openModal={openModal} isDesktop={isDesktop} isOpenApp={isOpenApp} handleShow={handleShow} setOpenModal={setOpenModal} />
      <Main isOpenModal={isOpenModal} openModal={openModal} isOpenApp={isOpenApp} handleShow={handleShow} viewportWidth={viewportWidth} />

      <Footer />

    </BrowserRouter>
  );
};

export default App;
