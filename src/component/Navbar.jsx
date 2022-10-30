import React from "react";
import SidebarMenu from "./SidebarMenu";

function NavbarSidebar() {
  return (
    <div>
      <div className="fixed w-full h-screen ">
        <div className="navbar bg-[#C31B20]">   
        </div>
      </div>
      <div className="fixed w-[200px] h-[110px]  text-white ml-[15%] text-2xl flex justify-center items-center">
        <p className="font-bold">Dashboard</p>
      </div>
    </div>
  );
}

export default NavbarSidebar;
