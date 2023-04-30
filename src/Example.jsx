import React, { createContext, useContext, useState } from "react";
import { Sample2 } from "./Sample2";
import { NameContext, useGlobalContext } from "./context";
//1. creating context - createContext ✅
//2. publisher - provider - context.Provider ✅
//3. subscribe  - useContext - useContext(context)

function Example() {
  // let name = "Jack";

  const { profileData, setProfileData } = useGlobalContext(); //3rd step
  const { nameList, setNameList } = useContext(NameContext); //3rd step
  console.log(profileData);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div>
      <h2>Example </h2>
      {nameList.map((nl) => (
        <Sample name={nl} />
      ))}
      <Sample1 />
      <p>{profileData.name}</p>
      <p>{profileData.mobile}</p>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      {/* <input
        type="number"
        onChange={(event) => setMobile(event.target.value)}
        value={mobile}
      /> */}
      <button onClick={() => setNameList([...nameList, name])}>
        Change Name
      </button>
      {/* <Sample />
        <Sample1 />
        <Sample2 /> */}
    </div>
  );
}

function Sample({ name }) {
  //const nm = useGlobalContext();
  return (
    <div>
      <h1>Name - {name}</h1>
      {/**/}
    </div>
  );
}

function Sample1() {
  const { profileData } = useGlobalContext();
  return (
    <div>
      <h1>Welcome {profileData.name} </h1>
      <h1>Mobile Number {profileData.mobile}</h1>
      <p>Text {profileData.txt}</p>
    </div>
  );
}

export default Example;
