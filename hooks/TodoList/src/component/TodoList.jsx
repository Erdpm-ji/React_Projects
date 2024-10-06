import 'bootstrap/dist/css/bootstrap.min.css'

const TodoList = () => {

    

    return (
        <>
            <table className="table">
                <tbody>
                    {todoItem.map((todo) => (
                        <tr key={todo.name}>
                            <td>{todo.name}</td>
                            <td>{todo.quentity}</td>
                            <td><button className='btn btn-danger' >Remove</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}

export default TodoList;