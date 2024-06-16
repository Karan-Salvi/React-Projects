import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-store";
import Message from "./components/Message";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center>
          <AppName />
          <AddTodo />
          <Message/>
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
