import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Additems from "./components/Additems";

import "./App.css";

function App() {
  const addItems = [
    {
      names: " Milk",
      dueDate: "4/10/2025",
    },

    {
      names: "Paneer",
      dueDate: "20/10/2025",
    },
    {
      names: "shoes",
      dueDate: "20/10/2025",
    },
  ];
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <Additems addItems={addItems}></Additems>
    </center>
  );
}

export default App;
