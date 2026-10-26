import { useState } from 'react'

function App() {
  const [time, setTime] = useState<number>(5);
  const [progress, setProgress] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startProgress = () => {
      setProgress(0)
      setIsRunning(true)  
  
      const startTime = Date.now();
        
      const interval = setInterval(() => {
        const timePassed = Date.now() - startTime;
  
        const percentage = Math.min((timePassed / (time * 1000)) * 100, 100)
        setProgress(percentage)
  
        if(percentage >= 100){
          clearInterval(interval)
          setIsRunning(false)
        }
      }, 50);

  }

  

  return (
    <>
      <section>

       <div className='actionDiv'>
          <input type="number" value={time} 
          style={{cursor: isRunning ? "not-allowed" : "auto"}}
          placeholder='Enter seconds' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTime(Number(e.target.value))} disabled={isRunning} />
          <button className='startBtn' onClick={startProgress} disabled={isRunning}>Start</button>
       </div>

       <label>Progress : {Math.round(progress)}%</label>
       <progress value={progress} max={100} />

      </section>
    </>
  )
}

export default App
