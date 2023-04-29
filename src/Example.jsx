import React, { createContext, useContext, useState } from "react";
import { Sample2 } from "./Sample2";
import { useGlobalContext } from "./context";
//1. creating context - createContext ✅

//2. publisher - provider - context.Provider ✅
//3. subscribe  - useContext - useContext(context)

function Example() {
  // let name = "Jack";

  const [nameList, setNameList] = useState([
    "ayesha",
    "kalaivani",
    "karthik",
    "raj",
  ]);
  // const [profileData, setProfileData] = useGlobalContext();
  // console.log(profileData);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div>
      <h2>Example </h2>
      {nameList.map((nl) => (
        <Sample name={nl} />
      ))}
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <input
        type="number"
        onChange={(event) => setMobile(event.target.value)}
        value={mobile}
      />
      <button onClick={() => setNameList([name, mobile])}>Change Name</button>
      {/* <Sample />
        <Sample1 />
        <Sample2 /> */}
    </div>
  );
}

function Sample({ name, mobile }) {
  //const nm = useGlobalContext();
  return (
    <div>
      <h1>Name - {name}</h1>
      <h1>Mobile Number {mobile}</h1>
    </div>
  );
}

function Sample1() {
  return (
    <div>
      <h1>Welcome </h1>
    </div>
  );
}

export default Example;
