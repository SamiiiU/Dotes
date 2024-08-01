import React from 'react'
import { FaRegFile } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data , frame}) => {
  return (
    
      <motion.div drag dragConstraints={frame} whileDrag={{scale: 1.2}} dragTransition={{ bounceStiffness: 200, bounceDamping: 10}} className='relative overflow-hidden p-5 h-60 rounded-[30px] text-teal-50 bg-zinc-900/90 w-48'>
        <FaRegFile />
        <p className='mt-4 text-sm leading-tight'>{data.description}</p>

        <div className='absolute bottom-0 left-0 w-full '>
          <div className='flex items-center justify-between px-5 py-4 '>
            <h2 className='text-sm'>{data.fileSize}</h2>
            <span className='rounded-full bg-zinc-600 p-[.2rem]'>
              {data.close ? <IoCloseSharp  size=".8em"/> : <MdFileDownload  size=".8em"/>}
              </span>
          </div>
          {data.tags.isOpen && (
            <div className= {`flex items-center justify-center w-full py-2 font-semibold bg-${data.tags.tagColor}-400 tag `}>
            <h3 className='text-sm'>{data.tags.tagTitle}</h3>
            </div>
          ) }
          

        </div>
        </motion.div>
    
  )
}

export default Card
