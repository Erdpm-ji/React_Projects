import { useRef, useState } from "react";

const Stopwatch = () => {

    const [time, setTime] = useState(0); 
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) {
            return;
        }
        timerRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 1); // Update the time every second
        }, 1000);
      };

      const pauseTimer = () => {
        if (timerRef.current) {
          clearInterval(timerRef.current); 
          timerRef.current = null;         
        }
      };

      const resetTimer = () => {
        clearInterval(timerRef.current); 
        timerRef.current = null;
        setTime(0);
      };
      
      

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>{time} seconds</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Stopwatch;