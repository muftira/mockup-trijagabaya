import React,{ useState } from 'react'
import Profil from "./Profil";
import { useNavigate, useLocation } from "react-router-dom";

function SidebarMenu() {
    const [active, setActive] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const page = location.pathname
  return (
    <div>
        <Profil/>
        <div className='text-left text-[#666666] mt-10 flex flex-col space-y-4'>
            <button className={`${page !== '/' ? '' : 'bg-[#1C1C1C] w-32 h-10 rounded-lg text-white '} `} onClick={(e) => navigate('/')}>Dashboard</button>
            <button className={`${page !== '/' ? 'bg-[#1C1C1C] w-32 h-10 rounded-lg text-white ' : ''} `} onClick={(e) => navigate('/kegiatanHarian')}>Kegiatan Harian</button>
        </div>
    </div>
  )
}

export default SidebarMenu