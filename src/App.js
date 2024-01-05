import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



function App(){

  const [step, ak] = useState(1);

  const [test,aktest] = useState({name:'aravind'});

  const [open,setOpen] = useState(true);

  //ak((st)=>st-1);  updating based on current state

  function previousBtn(){
    if(step>1){
      ak((st)=>st-1);
    }
  }
  
  function nextBtn(){
    if(step<3){
      ak((st)=>st+1);
      aktest({name:'kumar'})
    }
    
  }

  return (
  
    <>
    <button className="buttons" onClick={()=>setOpen(!open)}>&times;</button>
    
    {
    
    open && ( <div className="steps">
      <div className="numbers">
        <div className={`${step >=1 ? "active" : ""}`}>1</div>
        <div className={`${step >=2 ? "active" : ""}`}>2</div>
        <div className={`${step >=3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">Step {step}: {messages[step-1]} {test.name}</p>

      <div className="buttons">
        <button style={{backgroundColor:'#7950f2',color:'white'}} onClick={previousBtn}>previous</button>
        <button style={{backgroundColor:'#7950f2',color:'white'}} onClick={nextBtn}>Next</button>
      </div>
        
    </div>)
    
    
   }
    </>


  )
}

export default App;
