import { createContext, useState, useContext } from "react";

const NameContext = createContext();

const NameProvider = ({ children }) => {
  const data = profileDetail();
  const [profileData, setProfileData] = useState(data);
  console.log(profileData);
  return (
    <NameContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </NameContext.Provider>
  );
};

function profileDetail() {
  return {
    name: "jack",
    mobile: 648658346,
    txt: "ierkewj437fn  mszvb,mxzv j",
  };
}
export const useGlobalContext = () => {
  return useContext(NameContext);
};

export { NameContext, NameProvider };
