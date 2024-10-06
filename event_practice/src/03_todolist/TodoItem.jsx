import { useState } from "react";

const TodoItem = ({todos, onUpdateTodos}) => {

    const[todoList, setTodoList] = useState(todos);
    
    const handleTodoDelete = (tno) => {
        const updateToList = todoList.filter(todo => todo.tno !== tno);
        setTodoList(updateToList);
        onUpdateTodos(updateToList);
    }

    return (
        <>
        <tbody >
            
        {
        todos.map((todo, index) => (
           
            <tr key={index}>
                <td>{todo.tno}</td>
                <td>{todo.issue}</td>
                <td>{todo.status}</td>
                <td>
                    <button className='btn btn-danger m-1' onClick={() => handleTodoDelete(todo.tno)}>Delete</button>
                </td>
            </tr>
        ))
    }
                        
    </tbody >
    </>
    );
}

export default TodoItem;