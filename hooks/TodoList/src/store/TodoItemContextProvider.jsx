import { useRef } from "react";
import todoItemReducer from "./TodoItemReducer";
import { todoItems } from "./todo_items_store";
import { useReducer } from "react";

const TodoItemContextProvider = ({children}) =>{
    const [todoItem, todoItemsDispatcher] = useReducer(todoItemReducer, []);
    const prevTodo = useRef([]); // Ref to store previous state
  
    // Add Todo function
    const addTodo = (name, quentity) => {
      const newTodoItemAction = {
        type: "ADD_TODO",
        payload: { name, quentity, prevTodo },
      };
      todoItemsDispatcher(newTodoItemAction);
    };
  
    // Delete Todo function
    const deleteTodo = (name) => {
      const deleteTodoItemAction = {
        type: "DELETE_TODO",
        payload: { name, prevTodo },
      };
      todoItemsDispatcher(deleteTodoItemAction);
    };
  
    // Undo Todo function
    const undoTodo = () => {
      const undoTodoItemAction = {
        type: "UNDO_TODO",
        payload: { prevTodo },
      };
      todoItemsDispatcher(undoTodoItemAction);
    };

    return <todoItems.Provider value={{todoItem, addTodo, deleteTodo, undoTodo}}>
        {children}
    </todoItems.Provider>

}

export default TodoItemContextProvider;
