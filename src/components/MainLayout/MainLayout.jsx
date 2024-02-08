import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
