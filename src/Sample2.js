import { useGlobalContext } from "./context";
import { useContext } from "react";
export function Sample2() {
  const name = useGlobalContext();
  return (
    <div>
      <h1>Hi {name}</h1>
    </div>
  );
}
