import React from "react";

export default function Friends({ items ,handleSelect,select}) {
  return (
    <ul className="">
      {items.map((i) => 
        <Friend friend={i} key={i.id} handleSelect={handleSelect} select={select}/>
      )}
    </ul>
  );
}


function Friend({friend,handleSelect,select})
{
    return <li>
        <img src={friend.image} alt={friend.name}/>
       <h3>
        {friend.name}
        </h3> 
        {friend.balance<0?<p className="red">You Owe {friend.name} $ {Math.abs(friend.balance)} </p>:friend.balance>0?<p className="green">{friend.name} owe you $ {friend.balance} </p>:<p>You and {friend.name} are even</p>}
        <button className="button" onClick={()=>handleSelect(friend.id)}>
        {select!==friend.id?"Select":"Close"}
    </button>
    </li>
}