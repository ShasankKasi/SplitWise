import React from 'react'
import { useState } from 'react';
export default function AddFriend({onAddFriend}) {
    const [name,setName]=useState("");
    const[url,setUrl]=useState("");
    function handleFriend(e){
        e.preventDefault();
        if(name==="" || url==="")
            {
                console.log("empty string");
                alert("Please Enter missing name or  Url")
                return;
            }
        const newItem={
            id:Date.now(),
            name:name,
            image:url,
            balance:0,
        }
        onAddFriend(newItem);
    }
  return (
    <div>
      <form className="form-add-friend">
        <label> Friend Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>Image URL</label>
        <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
        <button className='button' onClick={(e)=>handleFriend(e)}>Add</button>
        </form>
    </div>
  )
}
 