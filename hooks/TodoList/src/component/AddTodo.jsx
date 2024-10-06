
import Style from "./AddTodo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTodo = () => {

    return (
        <>
            <form className={Style.formcontainer} onSubmit={addItem}>
                <input className={Style.forminput}
                    type="text"
                    placeholder="Enter Name"
                >
                </input>
                <input
                    className={Style.forminput}
                    type="text"
                    placeholder="Enter Quentity"
                ></input>
                <button className="btn btn-success" type="submit">Add</button>
                <button className="btn btn-warning" type="button" onClick={undoTodo}>Undo</button>
            </form>
        </>
    );
}

export default AddTodo;