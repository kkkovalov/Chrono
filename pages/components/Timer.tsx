import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ButtonGroup } from "@mui/material";

const Timer : React.FC<{quote : string}> = ({quote}) => {

    const [started, setStarted] = useState(false)
    const [time, setTime] = useState(10000000)

    useEffect(()=>{
    let interval : any = null;
    started ? 
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10) 
    :
        clearInterval(interval);
    
    return () => {
      clearInterval(interval);
    };
    },[started])

    return(
        <div className=" w-full text-center mt-48 grid">
            <h2 className=" text-white text-9xl">
                {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}
                :
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                :
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </h2>
            <TextField multiline className=" mt-4 w-96 m-auto" size="medium" id="filled-basic" label="What are you doing this time?" variant="filled" />
            {
            started ?
            <ButtonGroup variant="outlined" className=" w-64 m-auto mt-4" aria-label="outlined button group">
                <Button className=" w-96" variant="contained" onClick={() => setStarted(false)} color="error" >Delete</Button>
                <Button className=" w-96" variant="contained" onClick={() => setStarted(false)} color="error" >Pause</Button>
                <Button className=" w-96" variant="contained" onClick={() => setStarted(false)} color="error" >Save</Button>
            </ButtonGroup>
            :
            <Button variant="contained" onClick={() => setStarted(true)} className=" w-64 m-auto mt-4">Start</Button>
            }
            <h3 className=" text-white mt-4 text-2xl">{quote}</h3>
        </div>
        
    )
}

export default Timer;