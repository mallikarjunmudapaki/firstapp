import React, {useState}from 'react'
// import Alert from './Alert'


export default function Textform(props) {
    const changeToUpperCase=()=>{
       
        let newText=text.toUpperCase()
        settext(newText)
        if(text===""){
          props.showAlert(" please enter the text !","warning")
        }else{

          props.showAlert("Converted to UpperCase!","success")
        }
      
    }
    const changeToLowerCase=()=>{
       
        let newText=text.toLowerCase()
        settext(newText)
        if(text===""){
          props.showAlert(" please enter the text !","warning")
        }else{
        props.showAlert("Converted to LowerCase!","success")
        }
    }
   
    const handleOnChange=(event)=>{
      settext(event.target.value)
   
        
    }
    const ClearText=()=>{
    
        let newText="";
        settext(newText)
        props.showAlert(" Cleared the text!","success")
        
    }
    const handleCopy=()=>{
        let text = document.getElementById("textFrom");
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert(" Copied to clipboard!","success")
      
    }
    const wordCount = (text)=>{
      let regex = /\s+\S+/;
      let numOfWords = text.split(regex);
      return numOfWords.length;
    }
    const [text, settext] = useState("Enter your text");
  
  return (
    <>
    <div style={{backgroundColor: props.mode ==='light'? 'white':'grey',color:props.mode ==='dark'? 'white':'black'}} className='container'>
   <h1>{props.heading}</h1>
<div  className="mb-3" >
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" style={{backgroundColor: props.mode ==='light'? 'white':'grey',color:props.mode ==='dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="textFrom" rows="8"></textarea>
  <button   className='btn btn-secondary mx-1 my-2' onClick={changeToUpperCase}>Change to UpperCase</button>
  <button   className='btn btn-secondary mx-1 my' onClick={changeToLowerCase}>Change to LowerCase</button>
  <button   className='btn btn-secondary mx-1 my' onClick={ClearText}>Clear text</button>
  <button   className='btn btn-secondary mx-1 my' onClick={handleCopy}>Copy text</button>
  {/* <button className='btn btn-primary mx-3' onClick={changeFirstLetterToUpperCase}>Change First Letter To UpperCase</button> */}
</div>
<div  className="conatiner my-2">
    <h1>Your text summery</h1>
    <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
<p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
</div>
<div  className="container  my-3">
   <h3>Preview </h3>
    <p className='border p-3' >{text.length>0? text:'Enter Your Text To Preview Here'}</p>
    {/* <button onClick={changeMode} className='btn btn-primary'>{setBtn} </button> */}

</div>
</div>
    </>
  )
}
