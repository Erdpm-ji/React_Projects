function todoItemReducer(currentValue, action) {
    switch(action.type) {
      case "ADD_TODO":
        action.payload.prevTodo.current = currentValue; // Store current state before the change
        return [...currentValue, { name: action.payload.name, quentity: action.payload.quentity }];
      
      case "DELETE_TODO":
        action.payload.prevTodo.current = currentValue; // Store current state before deletion
        return currentValue.filter((todo) => todo.name !== action.payload.name);
      
      case "UNDO_TODO":
        return action.payload.prevTodo.current || []; // Restore the previous state
      
      default:
        return currentValue;
    }
  };

export default todoItemReducer;