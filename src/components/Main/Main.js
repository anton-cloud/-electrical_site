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
import Container from "../Container";
import ElecrtricalnstPage from "../../pages/ServicesPage/ElecrtricalnstPage";
import DesignWork from "../../pages/ServicesPage/DesignWork";
import Documentation from "../../pages/ServicesPage/Documentation";

const Main = ({ isOpenModal, openModal }) => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/electrical-installation"
          element={<ElecrtricalnstPage />}
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
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <Navigation />
        <SocailIcons />
      </Modal>
    </main>
  );
};

export default Main;
