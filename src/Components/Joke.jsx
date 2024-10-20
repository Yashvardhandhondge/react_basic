import axios from "axios";
import { useEffect, useState } from "react";

export function RandomJoke(){
    const [joke,setJoke] = useState('');
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        async function fetchJoke(){
            try{
                const response =await axios.get("https://official-joke-api.appspot.com/random_joke");
                const {setup,punchline}=(await response).data;
                setJoke(`${setup}${punchline}`)
            }catch(e){
                console.error('Error fetchinf the joke',error);
                setJoke('Failed to fetch a joke');
            }finally{
                setLoading(false)
            }
        };
        fetchJoke()
    },[])

    return(
        <div className="flex items-center justify-center h-2/6 bg-gray-50">
            <div className="bg-indigo-400 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-semibold mb-4">
                    Random joke
                </h1>
         {loading ? (<p className="text-gray-500">Loading ..</p>):(<p className="text-gray-800">{joke}</p>)}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={()=>window.location.reload()}
            >
            Fetch Another Joke
            </button>
            </div>

        </div>
    )
}