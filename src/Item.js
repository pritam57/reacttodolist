import React from "react";


const Item = (props) => {

return (
    <div className="da">
    <button className="remove" onClick={() => { props.onselect(props.id)}}>X</button>
    <li> {props.text}</li>
    </div>
)}

export default Item;
