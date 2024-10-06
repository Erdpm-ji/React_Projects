import { createContext } from "react";

export const todoItems = createContext({todoItem: [],
     addTodo : () => {},
     deleteTodo : () => {},
     undoTodo : () => {},
    }
);

