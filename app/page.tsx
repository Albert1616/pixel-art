'use client'

import BoxArt from "@/components/BoxArt";
import { useState } from "react";
import { FaEraser, FaPencil } from "react-icons/fa6";
import ColorPicker from "react-pick-color";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input";


export default function Home() {
  const [grid, setGrid] = useState<number>(20);
  const [color, setColor] = useState<string>('#ffffff');
  const [isWrite, setIsWrite] = useState<boolean>(true);
  const [isEraser, setIsEraser] = useState<boolean>(false);

  const handleGridChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= 20 && newValue <= 70) {
      setGrid(newValue);
    }
  };
  return (
    <main className="py-5 px-3 flex flex-col items-center justify-between w-full h-full">
      <div className="absolute top-[40%] left-0 rounded-lg text-xl text-black bg-gray-500 w-16 p-4 h-36 flex flex-col items-center gap-5">
        <FaPencil className={`cursor-pointer rounded-full px-[2px] py-[2px] ${isWrite&& "bg-white"}`}
        onClick={() => {
          if(!isWrite) {setIsWrite(true); setIsEraser(false)}
          }}/>
        <FaEraser className={`cursor-pointer rounded-full ${isEraser&& "bg-white"}`}
        onClick={() => {
          if(!isEraser) {setIsWrite(false); setIsEraser(true)}
          }}/>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-full border border-white p-5 cursor-pointer outline-none after:outline-none"
            style={{backgroundColor: color}}/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ColorPicker color={color} onChange={(colorSelected) => setColor(colorSelected.hex)}/>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-8 mx-auto">
        <p className="flex w-4">escala: </p>
          <Input 
            className="border-none border-bottom"
            placeholder="Scala" type="number" value={grid} 
            onChange={handleGridChange}/>
      </div>
      <div className="grid w-[90%] h-full"
      style={{gridTemplateColumns:`repeat(${grid}, 1fr)`}}>
        {Array.from({length:(grid*grid)}, (_,index) =>(
          <BoxArt key={index} color={color} isWrite={isWrite} isErase={isEraser}/>
        ))}
      </div>
    </main>
  );
}
