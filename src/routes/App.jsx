import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="Container">
        <Sidebar></Sidebar>
        <div className="Main">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
