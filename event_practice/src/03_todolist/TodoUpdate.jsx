const TodoUpdate = ({
    editingTno,
    todo,
    handleTodoUpdate,
    handleEditClick,
    handleTodoDelete,
    setEditingTno,
}) => {
    return (
        <td>
            {editingTno === todo.tno ? (
                <>
                    <button
                        className="btn btn-success m-1"
                        onClick={() => handleTodoUpdate(todo.tno)}
                    >
                        Save
                    </button>
                    <button
                        className="btn btn-secondary m-1"
                        onClick={() => setEditingTno(null)}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="btn btn-warning m-1"
                        onClick={() => handleEditClick(todo.tno, todo.issue, todo.status)}
                    >
                        Update
                    </button>
                    <button
                        className="btn btn-danger m-1"
                        onClick={() => handleTodoDelete(todo.tno)}
                    >
                        Delete
                    </button>
                </>
            )}
        </td>
    );
};

export default TodoUpdate;
