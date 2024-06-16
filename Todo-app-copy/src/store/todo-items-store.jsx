import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  item: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  let todoItemsReducer = (currTodoItems, action) => {
    let newtodoitems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newtodoitems = [
        ...currTodoItems,
        { name: action.payload.itemName, date: action.payload.itemDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newtodoitems = currTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    }

    return newtodoitems;
  };

  const [todoitems, dispatchTodoitems] = useReducer(todoItemsReducer, []);

  const onAddButton = (itemName, itemDate) => {
    const newActionItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoitems(newActionItem);
  };

  const handleDeleteClick = (todoItemName) => {
    const deleteActionItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoitems(deleteActionItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        item: todoitems,
        addNewItem: onAddButton,
        deleteItem: handleDeleteClick,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
