// rfc
import React, { useState } from "react";

export default function TextForm(props) {

    //declaring arrow functions
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);

        let newText = text.toUpperCase();
        setText(newText);
        // previous text = "Enter text here 2"
        //now text= uppercase newText
        props.showAlert(" Converted to Upper Case","success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lower Case","success");
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" Cleared","success");
    };

    const handleBinary = () => {
        let newText = text;
        // return newText.split('').map(function (char) {
        //     return char.charCodeAt(0).toString(2);
        // }).join(' ');

        setText(newText.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' '));
        props.showAlert(" Converted to Binary","success");

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied","success");
    }

    const handleExtraSpaces=()=>{
        // Rajex in js
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Removed extra spaces ","success");
    }

    //can handle events of JavaScript like this
    //free event object given onchange
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        //means new value = oldvalue+"new value";
    };

    const [text, setText] = useState("Enter text here 2","success");
    //default value of variable Text inside bracket
    //setText is our function that we will use to chnage value of our state variable here text

    // Text ="value"  //Wrong way of assigning value to variable
    // setText("New Value")  //correct way
    return (
        <>
            <div className="container my-3"   style={{color: props.mode==='dark'?'white':'black'}}>
                {/* <h1>{props.heading} - {text}</h1> */}
                <h1 className="mb-4" >{props.heading}</h1>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        value={text}
                        style={{backgroundColor : props.mode==='dark'?'#c1beb9':'white',color:props.mode==='dark'?'white':'black'}}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>
                    Convert To UpperCase
                </button>

                <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={handleLoClick}>
                    Convert To LowerCase
                </button>

                <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={handleClearClick}>
                    Clear Text
                </button>

                <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={handleBinary}>
                    Binary code
                </button>

                <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={handleCopy}>
                    Copy
                </button>

                <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"write something in the text box to preview "}</p>
            </div>
        </>
    );
}
