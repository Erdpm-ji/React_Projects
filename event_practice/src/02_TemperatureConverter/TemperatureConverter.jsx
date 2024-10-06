import {useState} from "react";

const TemperatureConverter = () =>{

    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState("celsius");
    const [error, setError] = useState('')

    const handleTemperatureChange = (e) => {
        let value = e.target.value;

        if(isNaN(value) && value !== ''){
            setError("Please Enter Valid Number");
        }else{
            setError('');
            setTemperature(value);
        }
    }

    const handleScaleChange =(e) =>{
        setScale(e.target.value);
    }

    const convertTemperature = () =>{

        const temp = parseFloat(temperature);

        if(isNaN(temp)){
            return '';
        }

        if(scale === 'celsius'){
            return ((temp * 9) / 5 + 32).toFixed(2) + ' °F';
        }else{
            return (((temp - 32) * 5) / 9).toFixed(2) + ' °C';
        }
    };


    return(
        <>
            <input
                type="text"
                value={temperature}
                onChange={handleTemperatureChange}
            ></input>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <div>
                <label>
                    Select Scale : 
                    <select value={scale} onChange={handleScaleChange}>
                        <option value='celsius'>Celsius to Fahrenheit</option>
                        <option value='fahrenheit'>fahrenheit TO Celsius</option>
                    </select>

                </label>
            </div>

            <p>Temperature is : {convertTemperature()}</p>
            
        </>
    )
}

export default TemperatureConverter;