import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "10000",
          width: "100vw",
          overflow: "visible",
          marginBottom: "10vh",
        }}
      >
        <Navbar />
      </div>
      <Outlet />

      <Footer />
    </>
  );
};

export default UserLayout;
