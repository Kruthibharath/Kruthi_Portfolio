import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../MainLayout/MainLayout";
import { AboutMe } from "../../pages/AboutMe/AboutMe";
import { Home } from "../../pages/Home/Home";
import { Experience } from "../../pages/Experience/Experience";
import { Contact } from "../../pages/Contact/Contact";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
