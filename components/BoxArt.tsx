import React, { useState } from 'react'

interface BoxProps{
    color:string,
    isWrite:boolean,
    isErase:boolean
}

function BoxArt({color, isErase, isWrite}:BoxProps) {
  const [colorCurrent, setColorCurrent] = useState<string>("#ffffff");

  const handleChangeColor = (e:React.MouseEvent<HTMLDivElement>) =>{
    if(isWrite){
        setColorCurrent(color);
    }
    if(isErase){
        setColorCurrent("#ffffff");
    }
  }
  return (
    <div
        style={{backgroundColor: colorCurrent}} 
        className='border cursor-pointer'
        onMouseDown={handleChangeColor}
    />
  )
}

export default BoxArt