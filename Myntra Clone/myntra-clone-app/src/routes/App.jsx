import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetchitems from "../components/Fetchitems";

function App() {
  return (
    <>
      <Header />
      <Fetchitems/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
