import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Modal from "react-modal";
import styles from "./Main.module.css";


import HomePage from "../../pages/HomePage/HomePage";
import GalaryPage from "../../pages/GalaryPage/GalaryPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import Navigation from "../Navigation";
import SocailIcons from "../SocailIcons/SocailIcons";
import ElecrtricalnstPage from "../../pages/ServicesPage/ElecrtricalnstPage";
import DesignWork from "../../pages/ServicesPage/DesignWork";
import Documentation from "../../pages/ServicesPage/Documentation";
import AppForm from "../AppForm/AppForm";
import TopButton from "../TopButton";

const Main = ({ isOpenModal, openModal, isOpenApp, handleShow, viewportWidth, setOpenModal }) => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage handleShow={handleShow} viewportWidth={viewportWidth} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/electrical-installation"
          element={<ElecrtricalnstPage handleShow={handleShow} />}
        />
        <Route path="/services/documentation" element={<Documentation />} />
        <Route path="/services/design-work" element={<DesignWork />} />
        <Route path="/galary" element={<GalaryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Modal
        isOpen={isOpenModal}
        onRequestClose={openModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        ariaHideApp={false}

      >
        <Navigation setOpenModal={setOpenModal} viewportWidth={viewportWidth} />
        <SocailIcons />

      </Modal>

      <Modal
        isOpen={isOpenApp}
        onRequestClose={handleShow}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >

        <AppForm handleShow={handleShow} />
      </Modal>

      <TopButton />
    </main>
  );
};

export default Main;
