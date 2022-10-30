import React from 'react'

function KegiatanHarian() {
  return (
    <div className='w-full h-[calc(100vh-80px)] flex justify-end overflow-y-auto '>
        <div className='w-[calc(100vw-240px)] bg-red h-full p-7'>
            <div className='h-[45%] w-[100%] bg-[#DABDA9] rounded-[20px] shadow-black/40 shadow-lg flex justify-center items-center space-x-10'>
                <div className='w-[20%] h-[70%] flex flex-col justify-center items-start space-y-4'>
                    <p className='font-bold text-2xl'>Status</p>
                    <p>Berikut ini adalah statistik dari  proses laporan kegiatan harian</p>
                </div>
                <div className='w-[20%] h-[70%] bg-[#FAFAFA] flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-[#C31B20] absolute left-6 top-[-25px]'>
                    </div>
                </div>
                <div className='w-[20%] h-[70%] bg-[#FAFAFA] flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-[#C31B20] absolute left-6 top-[-25px]'>
                    </div>
                </div>
                <div className='w-[20%] h-[70%] bg-[#FAFAFA] flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-[#C31B20] absolute left-6 top-[-25px]'>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default KegiatanHarian