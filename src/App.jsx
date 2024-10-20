import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Landing,Class11Program,Class12Program } from "./Components/Routing";
import UserList from "./user";
import { Todo } from "./Todo";
import { Card } from "./children";
import { Mycompoent } from "./Components/Lifecycle";
import { Modal1 } from "./Modals";
import { RandomJoke } from "./Components/Joke";
import { FunctionalCounter } from "./Components/counter";
import { ItemList1 } from "./Components/List_and_key";
import { Collapsible1 } from "./Components/Collapsible";
import { ToggleMessage } from "./conditional _rendering";
function App(){
    return<>
 <BrowserRouter>
  <Link to='/Allen'>Allen</Link>
  |
  <Link to='/neet/online-coaching-class-11'>Class11</Link>
  |
  <Link to='/neet/online-coaching-class-12'>Class12</Link>
  <Routes>
    <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}></Route>
    <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}></Route>
    <Route path="/Allen" element={<Landing/>}></Route>
  </Routes>
 </BrowserRouter>
  <div>
    <Todo></Todo>
<div className="px-2 m-8 py-4 flex bg-slate-100">
<UserList /> 
<ToggleMessage />
</div>
<div className=" space-x-1 flex m-8 col-span-1 flex-col p-10 justify-center ">
  
  <Card>
    <h2 className=" px-1 py-2 rounded  text-amber-500 bg-red-100">Card Title</h2>
    <p className="text-pink-500 bg-slate-200 p-0.5 rounded">This is some content inside the card</p>
  </Card>
  <br />
  <div>
    <Modal1 />
  </div>
  <br />
  <div>
  <Collapsible1 /> 
  </div>
  
</div>
<div className="m-8 flex ">
<ItemList1></ItemList1>
</div>
<div>
<FunctionalCounter />
<Mycompoent />

</div>
<div className="m-2">
<RandomJoke/> 
</div>
  </div>
  </>
}
export default App