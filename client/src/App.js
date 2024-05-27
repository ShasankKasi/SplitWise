import React, { useState } from "react";
import Friends from "./Friends";
import AddFriend from "./AddFriend";
import Split from "./Split";
const initialFriends = [
  {
    id: 118836,
    name: "Sharma",
    image:
      "https://images.news9live.com/wp-content/uploads/2023/11/Rohit-Sharma-1-1.jpg?w=802&enlarge=true",
    balance: -7,
  },
  {
    id: 933372,
    name: "Virat",
    image:
      "https://images.news18.com/ibnlive/uploads/2024/04/virat-kohli-glenn-maxwell-t20-world-cup-2024-04-15ea3f9519a4b70fbec554108e28f931.jpg?impolicy=website&width=640&height=480",
    balance: 20,
  },
  {
    id: 499476,
    name: "Suresh",
    image: "https://static.javatpoint.com/biography/images/suresh-raina2.jpg",
    balance: 0,
  },
];

export default function App() {
  const [select, setSelect] = useState("");
  const [add, setAdd] = useState(false);
  const [items, setItems] = useState(initialFriends);
  function handleSelect(id) {
    select !== id ? setSelect(id) : setSelect("");
    setAdd(false);
  }
  function handleAdd(item) {
    setItems([...items, item]);
    setAdd(false);
  }
  function addSplit(num)
  {
     setItems(items=>items.map((item)=>item.id===select?{...item,balance:item.balance+num}:item))
  }
  function handleClick(){
    setAdd(!add);
    setSelect(false);
  }
  const total=items.reduce((accumulator,curr)=>{return accumulator+curr.balance},0);
  const x=items.slice().filter(item=>item.balance>0)
  const positive=x.reduce((accumulator,curr)=>{return accumulator+curr.balance},0);
  const negative=positive-total;

  return (
    <div>
    <div className="navbar"><h1>
    👉 SplitWise 👈
      </h1>
      </div>
    <div className="header"><h1>
      Split bills 💵
      </h1> 
      <h2>
      Now made easier...
      </h2> 
      <div className="statistics">
      <p className="balance" style={{ color: total >= 0 ? 'green' : 'red' }}>
        Net Balance: {total} {total>=0?'😊':'🥺'}
    </p>
    <div className="amounts">
        <p style={{color: "green"}}>Total amount to be Received  💹 ₹   {positive}</p>
        <p style={{color: "red"}}>Total amount to be Paid  <br></br>  📈₹ {negative}</p>
    </div>
</div>

    <div className="app">

      <div className="sidebar">

        <Friends items={items} handleSelect={handleSelect} select={select} />
        {add && <AddFriend onAddFriend={handleAdd} />}
        <button className="button" onClick={() =>handleClick()}>

          {!add?"Add friend":"Close"}
        </button>
      </div>
      {select && 
        <Split friend={items.find((friend) => friend.id === select)} setSelect={setSelect} addSplit={addSplit}/>
      }
    </div>
        </div>
      </div>
  );
}
