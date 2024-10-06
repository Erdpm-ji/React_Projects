import { useState } from "react";


const TodoAdd = ({todos, onUpdateTodos}) => {

    const [tno, setTNo] = useState('');
    const [status, setStatus] = useState('New');
    const [issue, setIssue] = useState('');

    const handleTaskNumberChange = (e) => {
        setTNo(e.target.value);        
    };

    const handleIssueChange = (e) => {
        setIssue(e.target.value);
    };

    const addTodo = () => {
        if(tno !== '' && issue !==''){

            const updatedTodos = [...todos, { tno, issue, status}];
            onUpdateTodos(updatedTodos);
            setIssue('');
            setTNo('');
        }
    }

    return (
        <>
            <h1><center>Todo-List</center></h1>
            <input type='text'
             placeholder='Enter Task Number'
             value={tno}
             onChange={handleTaskNumberChange}/>
            <br/>
            <input type='text'
             placeholder='Enter Issue'
             value={issue}
             onChange={handleIssueChange}/>

            <button className='btn btn-success m-1' onClick={addTodo}>Add Todo</button>
        </>
    );
}

export default TodoAdd;