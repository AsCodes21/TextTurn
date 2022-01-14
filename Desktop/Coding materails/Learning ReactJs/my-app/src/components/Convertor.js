
import React,{useState} from 'react'

export default function Convertor(props) {
    const [text, setText] = useState('Enter your text:')
    const changed = (event)=>{
        setText(event.target.value);
    }    
    const Up = ()=>{
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }
    const Lower = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }    
    const clear = ()=>{
        let newText = "";
        setText(newText);
    }        
    const copy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    let letter = text.length;
    let words = (text.split(" ")).length;
    return (
        <div className = "container">
            <h1>Enter your text here:<button className = {`btn btn-${props.mode==="light"?"dark":"light"}`} onClick = {props.func}>{props.mode==="dark"?"Enable light mode":"Enable dark mode"}</button></h1>
            <textarea style = {{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} id = "mybox" className = "form-control my-3"value = {text} cols="30" rows="10" onChange = {changed}>
                {text}
            </textarea>
            <button onClick = {Up} className = "btn btn-primary">Turn to uppercase</button>
            <button onClick = {Lower} className = "btn btn-danger mx-2">Turn to lowercase</button>
            <button onClick = {clear} className = "btn btn-success">Clear</button>
            <button onClick = {copy} className = "btn btn-dark mx-2">Copy Text</button>
            <h2>Text Summary</h2>
            <p className = "my-2">{letter} letter and {words} words.</p>
            <p>{`${words*0.12} minutes will be needed to read your text.`}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    );
}
