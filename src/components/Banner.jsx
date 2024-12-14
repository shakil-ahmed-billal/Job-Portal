import React from 'react'
import image1 from '../assets/team1.jpg'
import image2 from '../assets/team2.jpg'

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="flex justify-between items-center h-[calc(100vh-290px)]">
        <div className="">
            <h1 className='text-6xl font-bold'>The <span className='text-blue-500'>Easiest Way</span><br />
            to Get Your New Job</h1>
        </div>
        <div className="flex ">
            <div className="">
                <img className='w-[350px] rounded-t-3xl rounded-br-3xl border-b-8 border-l-8 border-blue-500 object-cover' src={image1} alt="" />
            </div>
            <div className="">
                <img className='w-[350px] rounded-t-3xl rounded-br-3xl border-b-8 border-l-8 border-blue-500  object-cover' src={image2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
