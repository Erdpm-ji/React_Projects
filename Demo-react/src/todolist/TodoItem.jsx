const TodoItem = ({todo}) =>{
    return(
        <tr>
          <td>{todo.id}</td>
          <td>{todo.pname}</td>
          <td>{todo.price}</td>
        </tr>
    )
}

export default TodoItem;