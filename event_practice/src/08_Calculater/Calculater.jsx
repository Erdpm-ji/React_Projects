import { useState } from "react";
import Button from "./Button";
import Style from "./calculater.module.css"
import Display from "./Display";

const Calculator = () => {

    const [calVal, setCalVal] = useState('')

    const onButtonClick = (value) => {
        try{
            if(value === 'C'){
                setCalVal('');
            }else if(value === '='){
               const result = eval(calVal); 
                setCalVal(result.toString());
            }else{
                const newValue = calVal + value;
                setCalVal(newValue);
            }
        }catch(error){
            setCalVal('Error');
        }
    }


return (
    <>
        <div className={Style.container}>
            <Display Style={Style} calVal={calVal}></Display>
            <Button Style={Style} onButtonClick={onButtonClick}></Button>
        </div>
    </>
)
}

export default Calculator;