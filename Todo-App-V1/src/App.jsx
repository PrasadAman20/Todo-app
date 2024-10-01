import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Additem1 from "./components/Additem1";
import Additem2 from "./components/Additem 2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <div className="items-conatiner">
        <Additem1></Additem1>
        <Additem2></Additem2>
      </div>
    </center>
  );
}

export default App;
