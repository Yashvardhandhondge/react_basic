import { useState } from "react";

function Modal({isOpen,OnClose,children}){
    if(!isOpen) return null;
    return(
        <div className="fixed inset-2 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
           <button onClick={OnClose} className="px-4 py-2 rounded bg-fuchsia-600">Close</button>
           {children}
          </div>
        </div>
    )
}

export function Modal1(){
    const [isModalOpen,setModalOpen]=useState(false);
    return <>
    <div>
        <button onClick={()=>setModalOpen(true) } className="px-4 py-4 rounded text-xl bg-orange-950 text-red-500">Open Modal</button>
        <Modal isOpen={isModalOpen} OnClose={()=>setModalOpen(false)}>
            <h2 className="text-black px-2 py-1 text-2xl">Modal Title</h2>
            <p className="p-0.5 cursor-grabbing text-xl">This is some content inside the modal.</p>
        </Modal>
    </div>
    </>
}