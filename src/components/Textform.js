import React, {useState} from 'react'



export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
       
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "warning")
     
    }

    const clear = ()=>{
        setText("")
        props.showAlert("Screen Cleared", "success")
    }

    const handleOnChange = (event)=>{
       setText(event.target.value)
    }
  return (
    <>
<div className="mb-3">
  <h1>Enter the Text TO Analyze Below</h1>
  <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
  <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary my-2 mx-3" onClick={handleDownClick}>Convert To Lowercase</button>
  <button className="btn btn-primary my-2" onClick={clear}>Clear</button>
</div>
<h2>Text Info</h2>
<p className='my-1'>{text.split(" ").length} Words</p><p>{text.length} Characters</p>
<h4>Times To Read : {0.008*text.split(" ").length} Minutes Read</h4>
<h2 className='my-3'>Preview</h2>
<p>{text}</p>
</>
  )
}
