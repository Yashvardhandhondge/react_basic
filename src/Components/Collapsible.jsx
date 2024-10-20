import { useState } from "react";

function Collapsible({title,children}){
    const[isOpen,setIsOpen]=useState(false);

    return(
        <div>
            <button onClick={()=>setIsOpen(!isOpen)}>
                {title}{isOpen ? '-':'+'}
            </button>
            {isOpen && children}
        </div>
    )
}

export function Collapsible1(){
    return (
        <div className="m-2 flex flex-col rounded-xl bg-gray-400">
            <Collapsible title="Section 1">
            <p className="text-center text-black">This is the content of section 1 .</p>
            </Collapsible>
            <Collapsible title="Section 2">
            <p className="text-center text-black">This is the content of section 2 .</p>
            </Collapsible>
        </div>
    )
}