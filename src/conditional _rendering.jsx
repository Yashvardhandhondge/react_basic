import { useState } from "react";

export function ToggleMessage(){
    const[isVisible,setVisible] = useState(false);

    return (
        <div className="flex-col">
            <button onClick={()=>setVisible(!isVisible)} className="px-2 py-4 rounded bg-sky-400">ToggleMessage</button>
            {isVisible && <p className="text-gray-500">This message is conditionally rendered!</p>}
        </div>
    )
}