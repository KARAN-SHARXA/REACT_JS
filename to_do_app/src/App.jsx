import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Toddoitem1 from "./components/todoitem1";
import Todoitem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Toddoitem1 />
      <Todoitem2 />
    </center>
  );
}

export default App;
