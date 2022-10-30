import React from "react";
import SidebarMenu from "./SidebarMenu";

function NavbarSidebar() {
  return (
    <div className="w-full h-screen flex flex-col items-start overflow-hidden bg-[#D9D9D9]">
      <div className="navbar bg-[#C31B20]">Navbar</div>
      <div className="fixed h-screen w-full flex items-end z-20">
        <div className="flex flex-col items-center w-[15%] h-[calc(100vh-100px)] bg-[#FAFAFA] rounded-tr-[40px] rounded-br-[40px]">
          <SidebarMenu/>
        </div>
      </div>
    </div>
  );
}

export default NavbarSidebar;
