import { useEffect, useState } from "react";

export function UserList(){
    const [users,setUsers] = useState([]);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            }catch(e){
                console.error('Error fetching data:',e);
            }finally{
                setloading(false);
            }
        }
        fetchData();
    },[])

    if(loading){
        return <div className="flex px-4 py-4">Loading ...</div>
    }

    return (
        <ul>
            {users.map(user=>(
                <li key={user.is}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList;