import { useState } from 'react'
import {data} from './data'

function App() {

  const[number,setNumber] = useState(0);
  const [output,setOutput] = useState([]);

  function getPara(){
    if(number >8 ){
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
    }
    if(number <= 0){
          alert("Ayyo ! you know that you need negative paragraph😵, still giving u one 😁");
          setOutput(data.slice(0,1));
          setNumber(1);
          return;
    }
     for(let i=0;i<number;i++){
      setOutput(data.slice(0,i+1));
     }
  }

  return (
     <>
     <h1>TIRED OF BORING LOREM IPSUM?</h1>
     <div id="input">
      <label>Paragraphs : </label>
      <input type="number" value={number} onChange={(e)=>setNumber(e.currentTarget.value)}></input>
      <button onClick={getPara}>GENERATE</button>
     </div>
     <div id="para">
       {
        output.map((ele,index)=>{
         return <p id="single-para" key={index}>{ele.para}</p>
        })
       }
     </div>
     </>
  )
}

export default App
