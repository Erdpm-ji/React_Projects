import { useContext } from "react";
import { ItemList } from "../store/ItemList";

const WelcomeMsg = () =>{

    const item = useContext(ItemList);

    return(
        <>
            {item && <h1>Welcome To Bugdet App</h1>}
        </>
    );
}

export default WelcomeMsg;