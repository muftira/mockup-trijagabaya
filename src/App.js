import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KegiatanHarian from "./pages/Dashboard";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import SidebarMenu from "./component/SidebarMenu";
import "./App.css";

function App() {
  return (
    <div>
      <div className="absolute h-screen w-full flex items-end z-20">
        
          <div className=" fixed flex flex-col items-center w-[15%] h-[calc(100vh-100px)] bg-[#FAFAFA] rounded-tr-[40px] rounded-br-[40px]">
            <SidebarMenu />
          
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="kegiatanHarian" element={<KegiatanHarian />} />
          </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
