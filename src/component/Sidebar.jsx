import React from 'react'
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <div className="fixed h-screen w-full flex items-end z-20">
        <div className="flex flex-col items-center w-[15%] h-[calc(100vh-100px)] bg-[#FAFAFA] rounded-tr-[40px] rounded-br-[40px] shadow-black/40 shadow-lg">
          <SidebarMenu/>
        </div>
      </div>
  )
}

export default Sidebar