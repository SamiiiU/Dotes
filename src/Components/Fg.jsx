import React, {  useRef } from 'react'
import Card from './Card'


const Fg = () => {

  const fgFrame = useRef(null);

  

  return (
    <div>
      <div ref={fgFrame} className='fixed z-[2] w-full h-[90vh] bottom-0 mt-4 flex gap-10 flex-wrap p-6'>
          {
            
            <Card  frame={fgFrame}/>
          }
        </div>
    </div>
  )
}

export default Fg
