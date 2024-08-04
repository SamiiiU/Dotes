import React , {useContext } from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { motion } from "framer-motion"
import { DataContext } from '../GlobalState/GlobalData';
import { AppContext } from '../GlobalState/GlobalAdd';
import Security from './Security';


const Card = ({frame}) => {

  const {data} = useContext(DataContext);
  const { setIsOpen ,setTitle , setPassword, setDescription , editID , setId , security , setSecurity} = useContext(AppContext)

  const editor = (item) =>{
    setIsOpen(true)
    setTitle(item.title)
    setDescription(item.description)
    setPassword(item.password)
    setId(item.id)
    
    console.log(item.id , editID , item.password )

  } 

  

  

  
  return (
    <>

    <div className='absolute left-0'>
      <Security />
    </div>

    {data.map((item,index ) => (
      <motion.div

      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }}
      onDoubleClick={() => editor(item)}
      
      
      key={index} 
      
      drag dragConstraints={frame} whileDrag={{scale: 1.2}} dragTransition={{ bounceStiffness: 200, bounceDamping: 10}} 
      
      className='relative overflow-hidden p-5 rounded-[30px] text-teal-50 bg-zinc-900/90 h-[160px] w-[160px] sm:h-[220px] sm:w-[200px] '>
        
          
      <div  className='flex items-center gap-4'>
      <FaRegNoteSticky />
      <div className='w-full font-semibold '>{item.title}</div>
      </div>
      <div className='w-full h-[80%] overflow-hidden pb-1'>
        <p className='mt-4 text-sm leading-tight'>{item.description}</p>
      </div>
      <p>****************</p>
      
  
      </motion.div>
    ))}
    </>
      
    
   )
}

export default Card
