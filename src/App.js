import logo from "./logo.svg";
import "./App.css";
import Example from "./Example";
import { NameProvider } from "./context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Form from "./Form";
import TicTacToe from "./TicTacToe";
function App() {
  return (
    <div className="App">
      <NameProvider>
        <TicTacToe />
        {/* <Ref /> */}
        {/* <Reducer /> */}
        {/* <Form /> */}
        {/* <Example /> */}
      </NameProvider>
    </div>
  );
}

export default App;
