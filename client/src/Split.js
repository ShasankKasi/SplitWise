import React from "react";
import { useState } from "react";

export default function Split({ friend,addSplit,setSelect}) {
  const [bill, setBill] = useState("");
  const [exp, setExp] = useState("");
  const [user, setUser] = useState("you");
  function handleSplit(e) {
    e.preventDefault();
    if(bill<=0 || bill<exp || exp<0)
      {
        if(bill<=0)
        alert('Split bill from 1 rupees');
        if(bill<exp)
       alert('Expenses cannot be greater than Bill');
      if(exp<0)
      alert('Bill and Expenses takes only negative value');
        setSelect(false);
        return;
      }
     if(user==="friend")
      addSplit(-1*exp);
    if(user==="you")
      addSplit(bill-exp);
    setSelect(false);
  }
  return (
    <form className="form-split-bill">
      <h2>Split with {friend.name}</h2>
      <label>Total Bill</label>
      <input
        type="text"
        value-={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>Your Expense</label>
      <input type="text" value={exp} onChange={(e) => setExp(+e.target.value)} />
      <label>{friend.name}'s expense </label>
      <input type="text" disabled value={bill - exp} />
      <label>Who's paying the bill ? </label>
      <select value={user} onChange={(e)=>setUser(e.target.value)}>
        <option value="you">
          You
        </option>
        <option value="friend">{friend.name}</option>
      </select>
      <button className="button" onClick={(e) => handleSplit(e)}>
        Split Bill
      </button>
    </form>
  );
}
