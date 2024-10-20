import { useEffect, useState } from "react";

export function Mycompoent(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log('Compponent mounted or count updated');
    },[count])

    useEffect(()=>{
        console.log('Component mounted');
        return ()=>{
            console.log('Component will unmount')
        }
    },[])

    return(
        <div className="space-x-4  rounded flex">
            <p className="px-0.2 py-0.1 text-red-600">Count :{count}</p>
            <button onClick={()=>setCount(c=>c+1)} className="py-2 px-1 rounded bg-stone-300">Increment</button>
        </div>
    )
}