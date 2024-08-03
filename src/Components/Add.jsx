import React, { useState , useContext} from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
import { AppContext } from '../GlobalState/GlobalAdd.jsx';
import { DataContext } from '../GlobalState/GlobalData.jsx';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


const Add = () => {
    const [isPass , setIsPass] = useState(false);
    const { Close, isOpen ,setTitle , password , setPassword,  title ,setDescription ,description,  isNew , setIsNew, editID , } = useContext(AppContext);
    const {data  , Add , Delete , Update  } = useContext(DataContext)

    

    const titleChanger = (e) =>{
        setTitle(e.target.value);
    }

    const descChanger = (e) => {
        setDescription(e.target.value);
    }

    const handlepassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAdd = () => {
  
        const newData = {
          id : data.length + 1,
          title,
          description,
          password,
        }
  
        Add(newData);
        
        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");
        setPassword("");
    }

    const handleSave = () => {


        const updatedData = {
            id : editID,
            title,
            description,
            password
        }

        Update(updatedData)

        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");
        setPassword("")

    }

    const handleClose = () =>{
        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");
        setPassword("")
    }

    const handleDelete = () =>{
        Delete(editID);

        Close();

        setIsNew(false);

        setTitle("New dote....")
        setDescription("");
        setPassword("")
    }

    const handlePass = () =>{
        setIsPass(!isPass);
        console.log(isPass)
    }

    
  return (
    <>
        {isOpen && <div
    className={`fixed z-[4] w-full h-screen bottom-0 flex justify-center backdrop-blur-sm items-center bg-zinc-900/50`}>
        <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }}
        className='relative container w-[80vw] sm:w-[50vw]   rounded-3xl p-5 bg-zinc-900'>

        <div className='flex items-center justify-between mb-6 text-teal-50'>
            < FaRegNoteSticky/>
            <input onChange={titleChanger} className='font-bold text-center bg-transparent border-none outline-none '  type='text'  value={title} maxLength={20}/>
            <div onClick={handleClose}><IoCloseSharp style={{cursor : 'pointer'}}/></div>
        </div>
        <div className='relative w-full h-[50%] text-teal-50'>
            <textarea className='w-full h-full p-4 border-none outline-none rounded-3xl bg-zinc-800/10 focus:border-teal-50/50 focus:border-b-2' placeholder='Enter your text.........' onChange={descChanger} value={description}/>
            
            
            <div className='flex items-center mb-4 '>
            
            <input type={isPass ? 'text' : 'password'} className='w-full p-4 py-2 bg-transparent border-solid outline-none ' placeholder='Enter your password' onChange={handlepassword} value={password} maxLength={20}/>
            <span onClick={handlePass} className='w-8 text-center cursor-pointer '>{isPass ? <IoIosEye size='1.2em' /> : <IoIosEyeOff  size='1.2em'/>}</span>
            </div>
        </div>
        <div className='flex w-full py-2 justify-evenly'>
        
           

        {isNew ?
                (
                    <button onClick={handleAdd} className='px-16 py-2 font-bold border-2 rounded-lg text-teal-50 hover:text-zinc-900 hover:bg-teal-50 border-teal-50'>Add</button>
                    
                ) : (
                    <div className='flex flex-wrap items-center justify-center gap-5 py-6'>
                    <button onClick={handleSave} className='px-16 py-2 font-bold text-center border-2 rounded-lg text-teal-50 hover:text-zinc-900 hover:bg-teal-50 border-teal-50'>Save</button> 

                    <button onClick={handleDelete} className='px-16 py-2 font-bold border-2 rounded-lg text-[#ff3c38] hover:text-zinc-900 hover:bg-[#ff3c38] border-[#ff3c38]'>Delete</button>
                    </div>
                )
        }

        

        </div>
        </motion.div>
    </div>

        }
    </>
  )
}

export default Add
