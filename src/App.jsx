import { useState } from 'react'
import {data} from './data'

function App() {

  const[number,setNumber] = useState(0);
  const [output,setOutput] = useState([]);

  function getPara(){
     for(let i=0;i<number;i++){
      setOutput(data.slice(0,i+1));
     }
  }

  return (
     <>
     <h1>TIRED OF BORING LOREM IPSUM?</h1>
     <div>
      <label>Paragraphs</label>
      <input type="number" value={number} onChange={(e)=>setNumber(e.currentTarget.value)}></input>
      <button onClick={getPara}>GENERATE</button>
     </div>
     <div id="para">
       {
        output.map((ele,index)=>{
         return <p key={index}>{ele.para}</p>
        })
       }
     </div>
     </>
  )
}

export default App
