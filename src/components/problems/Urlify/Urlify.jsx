import React, { Component } from 'react'
import CodeDisplay from '../../codeDisplay/CodeDisplay';
/*
        URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr 3ohn Smit h 13
Output: "Mr%203ohn%20Smith" 
*/const Urlify = ({isSideMenu})=>{
        function getInputValue (e){
            // using  .replace you can use a regular expresion to search for blank spaces and return %20 for blank
            //spaces
            var Val = document.getElementById("InputValue").value;
            console.log(Val)
            var text = Val;
            var noBlankSpace = text.replace(/ /g, "%20");
            document.getElementById('result').innerHTML = noBlankSpace
        }
    let code = `
    function getInputValue (e){
        // using  .replace you can use a regular expresion to search for blank spaces and return %20 for blank
        //spaces
        var Val = document.getElementById("InputValue").value;
        console.log(Val)
        var text = Val;
        var noBlankSpace = text.replace(/ /g, "%20");
        document.getElementById('result').innerHTML = noBlankSpace
    }
    return(
        <div className={isSideMenu ? 'problems-container' : 'problems-container slide'}>
                    <div className='problem-display'>
                        <div className='problem-header'>
                            Urlify
                        </div>
                        < div className='problem-detail'>
                            <p>>Write a method to replace all spaces in a string with '%20'.</p>
                            <p>EXAMPLE</p>
                            <p>Input: "StrawBerry rhubarb pie is the best pie"</p>
                            <p>Output:StrawBerry%20rhubarb%20pie%20is%20the%20best%20pie</p>
                        </div>
                        
                        <div className='problem-content'>
                            <input type='text' id='InputValue' name='text'></input>
                            <button onClick={()=>{getInputValue()}}>Submit</button> <br/>
                            <h5 id='result'></h5>
                        </div>
                    </div>
                    <CodeDisplay code={code}/>
                </div>
            )
    
    `
        
    return(
<div className={isSideMenu ? 'problems-container' : 'problems-container slide'}>
            <div className='problem-display'>
                <div className='problem-header'>
                    Urlify
                </div>
                < div className='problem-detail'>
                    <p>>Write a method to replace all spaces in a string with '%20'.</p>
                    <p>EXAMPLE</p>
                    <p>Input: "StrawBerry rhubarb pie is the best pie"</p>
                    <p>Output:StrawBerry%20rhubarb%20pie%20is%20the%20best%20pie</p>
                </div>
                
                <div className='problem-content'>
                    <input type='text' id='InputValue' name='text'></input>
                    <button onClick={()=>{getInputValue()}}>Submit</button> <br/>
                    <h5 id='result'></h5>
                </div>
            </div>
            <CodeDisplay code={code}/>
        </div>
    )
}

export default Urlify





