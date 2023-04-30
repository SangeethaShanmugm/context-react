import { createContext, useState, useContext } from "react";

const NameContext = createContext(); //1

const NameProvider = ({ children }) => {
  const [nameList, setNameList] = useState([
    "ayesha",
    "kalaivani",
    "karthik",
    "raj",
  ]);

  const data = profileDetail();
  const [profileData, setProfileData] = useState(data);

  return (
    // second step
    <NameContext.Provider 
      value={{ profileData, setProfileData, nameList, setNameList }}
    >
      {children}
    </NameContext.Provider>
  );
};

function profileDetail() {
  return {
    name: "jack",
    mobile: 48658346,
    txt: "ierkewj437fn  mszvb,mxzv j",
  };
}

export const useGlobalContext = () => {
  return useContext(NameContext);
};

export { NameContext, NameProvider };
