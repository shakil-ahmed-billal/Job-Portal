import React from 'react'
import image1 from '../assets/team1.jpg'
import image2 from '../assets/team2.jpg'
import { motion } from "motion/react"




const Banner = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="flex justify-between items-center h-[calc(100vh-290px)]">
        <div className="">
            <motion.h1 animate={
                {
                    x: 20,
                    color :["red" , "green" ,],

                }
            } 
            transition={{
                duration: 2 ,
                delay: 1 , 
                ease: "easeInOut",
                repeat: Infinity
            }}
            className='text-6xl font-bold'>The <span className='text-blue-500'>Easiest Way</span><br />
            to Get Your New Job</motion.h1>
        </div>
        <div className="flex flex-col justify-start w-4/12">
            <motion.div
            animate={{
                y: [50 , 100 , 0] ,

            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                delay: 5
            }}
            className="">
                <img className='w-[350px] rounded-t-3xl rounded-br-3xl border-b-8 border-l-8 border-blue-500 object-cover' src={image1} alt="" />
            </motion.div>
            <motion.div
            animate={{
                x: [0 , 50 , 0] ,

            }}
            transition={{
                duration: 10,
                repeat: Infinity
            }}
            className="">
                <img className='w-[350px] rounded-t-3xl rounded-br-3xl border-b-8 border-l-8 border-blue-500  object-cover' src={image2} alt="" />
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner
