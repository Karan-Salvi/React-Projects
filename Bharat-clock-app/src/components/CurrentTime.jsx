import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    console.log("Interval set up");
    const intevelId = setInterval(() => {
    setTime(new Date());
    
  }, 1000)
    return () =>{
      clearInterval(intevelId);
      console.log("Cancelled")
    }
  ;},[])

  
  return (
    <>
      <p>This is the CurrentTime : {time.toLocaleTimeString()}</p>
    </>
  );
};
export default CurrentTime;
