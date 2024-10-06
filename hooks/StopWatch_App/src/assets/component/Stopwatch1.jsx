import { useRef, useState } from "react";
import { BsFillSkipStartCircleFill, BsFillPauseCircleFill} from "react-icons/bs";
import { BiReset } from "react-icons/bi";

const Stopwatch1 = () => {
    const [time, setTime] = useState(0) 
    const timeRef = useRef(null)


    const startWatch = () => {
        if(timeRef.current) return;
        timeRef.current = setInterval(() => (setTime( prevTime => prevTime +1)),1000)
    }

    const pauseWatch = () => {
        if(timeRef.current){
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    }

    const resetWatch = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
        setTime(0);
    }

    return (
        <>
            <h1>Stop Watch V1 </h1>
            <h3>{time} Second</h3>
            <button onClick={startWatch}><BsFillSkipStartCircleFill /></button>
            <button onClick={pauseWatch}><BsFillPauseCircleFill /></button>
            <button onClick={resetWatch}><BiReset /></button>
        </>
    );
}

export default Stopwatch1;