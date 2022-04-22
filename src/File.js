import { useCallback, useState } from "react";
import Item from "./Item";

function File() {
  const [input,setinput]=useState("");
  const [items,setitems]=useState([]);


const Dotheevent = () => {
setitems((olddata) => {
  return [...olddata,input];
})
setinput("")
}

const Dothefunc = (e) => {
setinput(e.target.value);
} 

const Deleteitem = (id) => {
  console.log("delete")
  setitems((olddata) => {
    return olddata.filter((arr,ino) => {
      return ino !== id;
    })})}


  return (
    <div className="Apps">
    <div>
   <h1 className="Appp">ToDo List</h1>
   <div className="input">
   <input type={"text"} placeholder={"Add a item"} value={input} onChange={Dothefunc}/><button onClick={Dotheevent}><b>+</b></button>
   </div>
   <ul className="ul">
   {items.map((value,index) => {
     return <Item  id={index} text={value} onselect={Deleteitem} />
   })}

   </ul>
    </div>
    </div>
  );
}

export default File;