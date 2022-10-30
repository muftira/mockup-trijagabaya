import { Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KegiatanHarian from "./pages/Dashboard";
import NavbarSidebar from "./component/NavbarSidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarSidebar/>
      {/* <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="kegiatanHarian" element={<KegiatanHarian/>} />   
      </Routes> */}
    </div>
  );
}

export default App;
