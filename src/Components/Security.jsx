import React , {useContext , useState} from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
import { AppContext } from '../GlobalState/GlobalAdd.jsx';

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Security = () => {
    const [isPass , setIsPass] = useState(false);
    const {setPassMassage ,  passMassage, isUnlock , handleSecurity,  setSecurity } = useContext(AppContext);
    const [counter , setCounter] = useState(0)
     

    const handleSecure = (e) => {
        setSecurity(e.target.value);
        setPassMassage(false)
    }

    const checkSecure = () => {            
        if(counter <= 3){
            handleSecurity();
            setCounter((prev) => (prev + 1))
        }
        else {
            
        }
    }
    
    const handlePass = () =>{
        setIsPass(!isPass);
        console.log(isPass)
    }

    return (
    
    <>
    {!isUnlock &&  
      <div
      className={`fixed z-[4] w-full h-screen bottom-0 flex justify-center backdrop-blur-sm items-center bg-zinc-900/50`}>
          <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }}
          className='relative container w-[80vw] sm:w-[50vw]   rounded-3xl p-5 bg-zinc-900'>
  
          <div className='flex items-center justify-between mb-6 text-teal-50'>
              < FaRegNoteSticky/>
              <p  className='font-bold text-center'>Enter the Key <span className='text-zinc-500'> "abc123" </span></p>
              <div ></div>
          </div>   
                      
              <div className='flex items-center mb-4 text-teal-50 '>
              
              <input type={isPass ? 'text' : 'password'} className= {`w-full p-4 py-2 bg-transparent border-solid outline-none `} placeholder='Enter Password' onChange={handleSecure} maxLength={20} required/>
              <span onClick={handlePass} className='w-8 text-center cursor-pointer '>{isPass ? <IoIosEye size='1.2em' /> : <IoIosEyeOff  size='1.2em'/>}</span>
              </div>

            {
                passMassage && (
                    <>
                    {counter <= 3 ? (
                        <p className='text-[#ff3c38] pl-4 my-4'>
                        You've entered wrong password {counter} times
                        </p>
                    ) : <p className='text-[#ff3c38] pl-4 my-4'>
                        Sorry the dotes are locked
                        </p>
                        }
                    </>
                )
                    
                
            }

          <div className='flex w-full py-2 justify-evenly'>
          
          <button className='px-16 py-2 font-bold border-2 rounded-lg text-teal-50 hover:text-zinc-900 hover:bg-teal-50 border-teal-50' onClick={checkSecure}>Enter</button>
  
  
          </div>
          </motion.div>
      </div>
    }
    
    </>
    
  )
}

export default Security
