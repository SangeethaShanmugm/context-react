import React, { useState } from "react";

function Form() {
  let [state, setState] = useState({ user: "jack", pass: "1234" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
    <p>Name: {state.user}</p>
    <p>Pass: {state.pass}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="user" value={state.user} onChange={(e)=> setState({...state,[e.target.name]: e.target.value})}/>
        <input type="text" name="pass" value={state.pass}  onChange={(e)=> setState({...state,[e.target.name]: e.target.value})} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
