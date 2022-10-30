import React from 'react'

function Dashboard() {
  return (
    <div className='w-full h-[calc(100vh-80px)] flex justify-end overflow-y-auto '>
        <div className='w-[calc(100vw-240px)] bg-red h-full p-7'>
            <div className='h-[70%] w-[100%] bg-[#FAFAFA] rounded-[20px] shadow-black/40 shadow-lg'>
            </div>
            <div className='h-[70%] w-[100%] flex justify-between items-center'>
                <div className='w-[48%] h-[80%] bg-[#FAFAFA] rounded-[20px] shadow-black/40 shadow-lg'></div>
                <div className='w-[48%] h-[80%] bg-[#FAFAFA] rounded-[20px] shadow-black/40 shadow-lg'></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard