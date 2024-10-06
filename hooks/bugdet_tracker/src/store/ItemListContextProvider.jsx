import { useReducer } from "react";
import BugdetReducer from "./BugdetReducer";
import { ItemList } from "./ItemList";  // Ensure you're importing the correct context

const ItemListContextProvider = ({ children }) => {
    const [item, itemDispatcher] = useReducer(BugdetReducer, []);

    const addBugdet = (name, price, type) => {
        const newItemAction = {
            type: "ADD_ITEM",
            payload: { name, price, type }
        };
        itemDispatcher(newItemAction);
    }

    const deleteBugdet = (name) => {
        const newItemAction = {
            type: "DELETE_ITEM",
            payload: { name }
        };
        itemDispatcher(newItemAction);
    }

    const resetBugdet = () => {
        const newItemAction = {
            type: "RESET",
        };
        itemDispatcher(newItemAction);
    }

    return (
        <ItemList.Provider value={{
            item,
            addBugdet,
            deleteBugdet,
            resetBugdet
        }}>
            {children}
        </ItemList.Provider>
    );
}

export default ItemListContextProvider;
