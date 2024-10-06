import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import Todos from './Todos';



const TodoList = () => {

    const [todos, setTodos] = useState(Todos);

    const handleUpdateTodos = (updatedTodos) => {
        setTodos(updatedTodos);
    };

    return (
        <>
            <TodoAdd todos = {todos} onUpdateTodos={handleUpdateTodos}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Task Number</th>
                        <th>Issue</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <TodoItem todos =  {todos} onUpdateTodos={handleUpdateTodos}/>
            </Table>
        </>
    )
}

export default TodoList;