
import React, {useEffect, useState} from "react";



const App = ()  => {

    const [valueSec, setValueSec] = useState('');
    const [sec, setSec] = useState('')
    const [timer, setTimer] = useState('hh:mm:ss')
    const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
      if(sendRequest){
     const interval = setInterval(() => {
          setSec(sec => sec - 1)
         setTimer(timer => timer = convertTime(sec))
      }, 1000);
     return () => clearInterval(interval)}
  }, [sendRequest, timer])

  const convertTime = (time) => {
    let value = parseInt(time, 10)
    let hours = Math.floor(value / 3600);
    let minutes = Math.floor((value - (3600 * hours)) / 60);
    let seconds = Math.floor((value - (3600 * hours)) - (minutes * 60));
    if (hours   < 10) {hours = "0" + hours}
    if (minutes < 10) {minutes = "0" + minutes}
    if (seconds < 10) {seconds = "0" + seconds}
    return hours + ':' + minutes + ':' + seconds;
  }
    const handleChange = (event) => {
        const value = event.target.value;
        setValueSec(value)
    }
    const btnAction = () => {
        setSec(valueSec)
        setSendRequest(prev => !prev)
        setValueSec('')
    }

  return (
      <>
        <input value={valueSec} onChange={handleChange} placeholder="Seconds" type="text" />

        <button onClick={btnAction}>Start</button>

        <br />
        <br />

        <span>{timer}</span>
      </>
  );
}

export default App;
