import Style from "./ColorePickerContainer.module.css";
import { useState } from "react";

const ColorPickerApp = () => {
    
    const [color, setColor] = useState('');

    const handleInputChange = (e) => {
        setColor(e.target.value);
    }

    return(
        <>
        <div className={Style.container} style={{backgroundColor : color}}>
            <label>Enter your faverate color</label>
            <input className={Style.inputfiled} type="text" value={color} onChange={handleInputChange}></input>
            {/* <button onClick={handleColorChanage}>Color Change</button> */}
        </div>
        
        </>
    )
}

export default ColorPickerApp;