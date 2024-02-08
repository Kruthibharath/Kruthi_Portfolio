import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Home } from "./pages/Home/Home";
import { Experience } from "./pages/Experience/Experience";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
