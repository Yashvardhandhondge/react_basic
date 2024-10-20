import { useState } from "react";

export function FunctionalCounter(){
const [count,setCount]=useState(0);
function increment(){
    setCount(c=>c+1);
}

return (
    <div className="space-x-4  rounded flex ">
        <p className="px-0.2 py-0.1 text-red-600">Count:{count}</p>
        <button onClick={increment} className="py-2 px-1 rounded bg-stone-300">Increment</button>

    </div>
)
}