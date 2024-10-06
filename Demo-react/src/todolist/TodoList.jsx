import TodoItem from "./TodoItem";
import Table from "react-bootstrap/Table";
import Todos from "../todolist/Todos";

const TodoList = () => {
    return (
        <>
            <h1><center>Todo-List</center></h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Todos.map((todo)=>(
                        <TodoItem key={todo.id} todo={todo} />
                    ))}   
                </tbody>
            </Table>
        </>
    )
}

export default TodoList;