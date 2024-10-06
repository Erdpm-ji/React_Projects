
import { useContext, useRef } from "react";
import Style from "./AddBugdet.module.css";
import { ItemList } from "../store/ItemList";


const AddBugdet = () => {

    const {addBugdet, resetBugdet} = useContext(ItemList);

    const name = useRef('');
    const price = useRef('');
    const type = useRef('');

    const addBugdetItem = (e) => {
        e.preventDefault();
        
        if (name.current.value && price.current.value && type.current.value){
            addBugdet(name.current.value, price.current.value, type.current.value);
            name.current.value="";
            price.current.value="";
        }else {
            alert("All Value are mentary");
        }
    }


    return (
        <>
            <form className={Style.form} onSubmit={addBugdetItem}>
                <input type="text" className={Style.fileds} placeholder="Enter Item Name" ref={name}></input>
                <input type="text" className={Style.fileds} placeholder="Enter Bugdet/Expenses INR" ref={price}></input>
                <select className={Style.fileds} ref={type} >
                    <option value="Bugdet">Bugdet</option>
                    <option value="Expenses">Expenses</option>
                </select>

                <button type="submit" className='btn btn-outline-success btn-lg me-md-2'>Add</button>
                <button type="reset" className='btn btn-outline-warning btn-lg me-md-2' onClick={resetBugdet}>Reset</button>
            </form>
        </>
    );
}

export default AddBugdet; 