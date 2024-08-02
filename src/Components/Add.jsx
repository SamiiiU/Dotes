import React, { useState , useContext} from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
import { AppContext } from '../GlobalState/GlobalAdd.jsx';
import { DataContext } from '../GlobalState/GlobalData.jsx';


const Add = () => {
    const { Close, isOpen ,setTitle , title ,setDescription ,description,  isNew , setIsNew, editID , } = useContext(AppContext);
    const {data  , Add , Delete  } = useContext(DataContext)
    

    const titleChanger = (e) =>{
        setTitle(e.target.value);
    }

    const descChanger = (e) => {
        setDescription(e.target.value);
    }

    const handleAdd = () => {
       
  
        const newData = {
          id : data.length + 1,
          title,
          description
        }
  
        Add(newData);
        
        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");

        console.log( 'Total Data', data);
        console.log('Added Data', newData);
    }

    const handleSave = () => {


        const updatedData = {
            id : editID,
            title,
            description
        }

        Add(updatedData)

        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");


    }

    const handleClose = () =>{
        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");
    }

    const handleDelete = () =>{

        console.log(editID , isNew)
        Delete(editID);

        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");


        console.log(editID , isNew)
    }

    
  return (
    <motion.div className={`fixed z-[4] w-full h-screen bottom-0 flex justify-center ${isOpen ? 'visible' : 'hidden'} backdrop-blur-sm items-center bg-zinc-900/50`}>
        <div className='relative container w-[50vw] h-[50%]  rounded-3xl p-5 bg-zinc-900'>
        <div className='flex items-center justify-between mb-6 text-teal-50'>
            < FaRegNoteSticky/>
            <input onChange={titleChanger} className='font-bold text-center bg-transparent border-none outline-none'  type='text'  value={title}/>
            <div onClick={handleClose}><IoCloseSharp style={{cursor : 'pointer'}}/></div>
        </div>
        <div className='relative w-full h-[50%]'>
            <textarea className='w-full h-full bg-transparent border-none outline-none text-teal-50' placeholder='Enter your text.........' onChange={descChanger} value={description}/>
        </div>
        <div className='flex w-full py-6 btnbox justify-evenly'>
        
           

        {isNew ?
                (
                    <button onClick={handleAdd} className='px-16 py-2 font-bold border-2 rounded-lg text-teal-50 hover:text-zinc-900 hover:bg-teal-50 border-teal-50'>Add</button>
                    
                ) : (
                    <div className='grid w-full grid-cols-1 grid-rows-2 py-6 max-tablet:grid-cols-2 max-tablet:grid-rows-1'>
                    <button onClick={handleSave} className='px-16 py-2 font-bold border-2 rounded-lg text-teal-50 hover:text-zinc-900 hover:bg-teal-50 border-teal-50'>Save</button> 

                    <button onClick={handleDelete} className='px-16 py-2 font-bold border-2 rounded-lg text-[#ff3c38] hover:text-zinc-900 hover:bg-[#ff3c38] border-[#ff3c38]'>Delete</button>
                    </div>
                )
        }

        

        </div>
        </div>
    </motion.div>
  )
}

export default Add
