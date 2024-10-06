import { useContext } from "react";
import { todoItems } from "../store/todo_items_store";

const WelCome = () => {

    const {todoItem} = useContext(todoItems);

    return (
        <>
            {todoItem.length === 0 && <h3>Enjoy Your Day!</h3>}
        </>

    );
}

export default WelCome;