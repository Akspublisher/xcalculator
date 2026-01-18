import React, { useState } from "react";

export default function XCalculator() {
const [inputValue, setInputValue] = useState(0);    
const [inputResult, setInputResult] = useState(0);
 const buttonStyle = {
  height:"70px",
  borderRadius:"10px",
  fontSize:"24px"
};

const handleClick = (value) =>{
    setInputValue(inputValue + value)
}

const Clear_all = ()=> {
    setInputValue("")
    setInputResult("")
}

const Calculate_Result = () => {
if(inputValue.trim() === ""){{
    setInputResult("Error");
    return;
}}

try{
    const ResultEval = eval(inputValue);
    setInputResult(String(ResultEval));
}catch {
    setInputResult("Error")
}
}

    return (
    <div>
      <h1 style={{textAlign:"center", bottom:"10px"}}>React Calculator</h1>
      <div style={{maxWidth:"300px", margin:"0 auto", padding:"20px", border:"1px solid #ccc", borderRadius:"10px"}}>     
        <input type="text" value={inputValue} style={{width:"80%", height:"20px", fontSize:"24px", textAlign:"center"}} readOnly />
        {/* <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"10px", marginTop:"10px"}}>
          {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"].map((btn) => (
            <button key={btn} style={{height:"70px", borderRadius:"10px", fontSize:"24px"}} onClick={()=> setInputValue(btn)}>{btn}</button>
          ))} */}

          <div style={{textAlign:"center"}}>
            {inputResult}
          </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"10px", marginTop:"10px"}}>
            <button style={buttonStyle} onClick={() => handleClick("7")}>7</button>
            <button style={buttonStyle} onClick={() => handleClick("8")}>8</button>
            <button style={buttonStyle} onClick={() => handleClick("9")}>9</button>
            <button style={buttonStyle} onClick={() => handleClick("+")}>+</button>

            <button style={buttonStyle} onClick={() => handleClick("4")}>4</button>
            <button style={buttonStyle} onClick={() => handleClick("5")}>5</button>
            <button style={buttonStyle} onClick={() => handleClick("6")}>6</button>
            <button style={buttonStyle} onClick={() => handleClick("-")}>-</button>

            <button style={buttonStyle} onClick={()=> handleClick("1")}>1</button>
            <button style={buttonStyle} onClick={()=> handleClick("2")}>2</button>
            <button style={buttonStyle} onClick={()=> handleClick("3")}>3</button>
            <button style={buttonStyle} onClick={()=> handleClick("*")}>*</button>

            <button style={buttonStyle}onClick={Clear_all}>C</button>
            <button style={buttonStyle} onClick={()=> handleClick("0")}>0</button>
            <button style={buttonStyle} onClick={Calculate_Result}>=</button>
            <button style={buttonStyle} onClick={()=> handleClick("/")}>/</button>
    </div>
    </div>
    </div>
  );
}