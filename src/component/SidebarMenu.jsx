import React from 'react'
import Profil from "./Profil";

function SidebarMenu() {
  return (
    <div>
        <Profil/>
        <div className='text-left text-[#666666] mt-10'>
            <p>Dashboard</p>
            <p>Kegiatan Harian</p>
        </div>
    </div>
  )
}

export default SidebarMenu