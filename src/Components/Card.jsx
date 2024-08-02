import React , {useContext } from 'react'
import { FaRegFile } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import { motion } from "framer-motion"
import { DataContext } from '../GlobalState/GlobalData';
import { AppContext } from '../GlobalState/GlobalAdd';


const Card = ({frame}) => {

  const {data} = useContext(DataContext);
  const {Close , setIsOpen ,setTitle , title ,setDescription ,description, editID , setId} = useContext(AppContext)

  const editor = (item) =>{
    setIsOpen(true)
    setTitle(item.title)
    setDescription(item.description)
    setId(item.id)
    
    console.log(item.id , editID )

  } 
  
  return (
    <>
    {data.map((item,index ) => (
      <motion.div onClick={() => editor(item)} key={index} drag dragConstraints={frame} whileDrag={{scale: 1.2}} dragTransition={{ bounceStiffness: 200, bounceDamping: 10}} className='relative overflow-hidden p-5 h-60 rounded-[30px] text-teal-50 bg-zinc-900/90 desktop:w-[15vw] w-[250px]'>
        
          
      <div  className='flex items-center gap-4'>
      <FaRegNoteSticky />
      <h1 className='font-semibold'>{item.title}</h1>
      </div>
      <div className='w-full h-[80%] overflow-hidden'>
        <p className='mt-4 text-sm leading-tight'>{item.description}</p>
      </div>
      
  
      </motion.div>
    ))}
    </>
      
    
   )
}

export default Card

// <motion.div drag dragConstraints={frame} whileDrag={{scale: 1.2}} dragTransition={{ bounceStiffness: 200, bounceDamping: 10}} className='relative overflow-hidden p-5 h-60 rounded-[30px] text-teal-50 bg-zinc-900/90 desktop:w-[15vw] w-[250px]'>
        
          
//         <div  className='flex items-center gap-4'>
//         <FaRegNoteSticky />
//         <h1 className='font-semibold'>{item.title}</h1>
//         </div>
//         <p className='mt-4 text-sm leading-tight'>{item.description}</p>
        
    
//       </motion.div>