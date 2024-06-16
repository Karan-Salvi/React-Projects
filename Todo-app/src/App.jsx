import "./App.css";
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";


function App() {
  const [todoitems, setTodoitems] = useState([]);

  const onAddButton = (itemName,itemDate) =>{
    let newtodoitems = [...todoitems,{name:itemName,
      date:itemDate,
    },]
    setTodoitems(newtodoitems);
  };

  const handleDeleteClick = (todoItemName) =>{
    const newtodoitems = todoitems.filter(item => item.name !== todoItemName);
    setTodoitems(newtodoitems);
  }

  return (
    <>
      <center>
        <AppName />
        <AddTodo onAddButton ={onAddButton}/>
        {todoitems.length === 0 ? <Message/>: <TodoItems todoitems={todoitems} onDeleteClicked = {handleDeleteClick} />}
      </center>
    </>
  );
}

export default App;
