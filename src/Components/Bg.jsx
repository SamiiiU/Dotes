import React , {useContext} from 'react'
import { IoAddOutline } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import { AppContext } from '../GlobalState/GlobalAdd.jsx';

const Bg = () => {
  const { Close , setIsNew } = useContext(AppContext);

  const newHandle = () => {
    Close();
    setIsNew(true);
  }

  return (
    <div>
    <div className=' fixed z-[1] w-full h-screen '>
          <div className='flex justify-between items-center w-full h-[50px]  p-4 text-zinc-600 '>
            <h1 className='text-xl font-bold text-teal-50'>Dotes Manageger</h1>
            <div className='cursor-pointer' onClick={newHandle}><MdAddCircle size="2.5em" color='ff3c38'/></div>
          </div>
          <p className='absolute top-1/2 left-1/2 translate-x-[-50%]  text-zinc-900 translate-y-[-50%] font-bold  text-[7rem] leading-none tracking-tight'>Dotes.</p>
    </div>
    </div>
  )
}

export default Bg
