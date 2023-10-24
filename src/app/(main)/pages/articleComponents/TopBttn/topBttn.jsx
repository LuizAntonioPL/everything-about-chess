"use client"

import { BsArrowUpCircle} from 'react-icons/bs'
import { useState, useEffect } from 'react'

export default function TopBttn(){
    const [display, setDisplay] = useState(0)
    
    useEffect(() => {
        window.addEventListener("scroll", displayTopBttn);
      });

    const displayTopBttn = () => {
        if(window.scrollY > screen.height){
            setDisplay("block")
        } else{
            setDisplay("hidden")
        }
    }
    
    return(
        <a href="#" className={`${display} sticky top-[calc(100vh-90px)] mr-[10vw] right-0 self-end`}>
            <BsArrowUpCircle size={40}/>
        </a>
    )
}