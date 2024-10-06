import React, { useState } from "react";
import Style from "./AddItem.module.css";


const AddItem = ({ items, onUpdate }) => {


    const [item, setItem] = useState('')
    const [quentity, setQuentity] = useState(0)

    const handleItemChange = (e) => {
        setItem(e.target.value);
    }

    const handleQuentityChange = (e) => {
        setQuentity(e.target.value);

    }

    const addItem = () => {
        if (quentity > 0 && item !== '') {
           
            const updateItem = [...items, { item, quentity }];
            onUpdate(updateItem);
            setItem("");
            setQuentity(0);

        }
        // console.log(...items, [item, quentity]);

    }

    return (
        <>
            <input type="text" className={Style.item} placeholder="Enter Item" value={item} onChange={handleItemChange} />
            <input type="text" className={Style.item} placeholder="0" value={quentity} onChange={handleQuentityChange} />
            <button type="submit" className={Style.add} onClick={addItem}>Add</button>
        </>
    );
}

export default AddItem;