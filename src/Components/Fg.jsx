import React, { useRef } from 'react'
import Card from './Card'

const Fg = () => {

  const fgFrame = useRef(null);

  const Data = [
    {
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize : "4Mb",
      close : false ,
      tags : {isOpen : true  , tagTitle : "Download Now..." , tagColor : "teal"}
    },
    {
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize : "15Mb",
      close : true ,
      tags : {isOpen : false  , tagTitle : "Download Now..." , tagColor : ""}
    },
    {
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize : "13Mb",
      close : false ,
      tags : {isOpen : true  , tagTitle : "Download Now..." , tagColor : "teal"}
    }
  ]
  return (
    <div>
      <div ref={fgFrame} className='fixed z-[2] w-full h-full flex gap-10 flex-wrap p-6'>
          {Data.map((item,index) => (
            <Card data = {item} frame = {fgFrame} />
          ))}
        </div>
    </div>
  )
}

export default Fg
