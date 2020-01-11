import React,{useState} from 'react';
import CodeDisplay from '../../codeDisplay/CodeDisplay';


const IsUnique = ({isSideMenu})=>{
    const [inputVal,setInputVal] = useState('');
    const [isUnique,setIsUnique] = useState(null)

    /*
        function to check if string is valid
        @param {String}
        @return {Boolean}
     */
    const checkUnique = string =>{
         // O(n^2) approach, no additional data structures used
        // for each character, check remaining characters for duplicates
        for (var i = 0; i < string.length; i++) {
            for (var j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false; // if match, return false
            }
            }
        }
        return true; // if no match, return true
    };
        
    function handleCheckUnique(string)  {
        let result = checkUnique(inputVal);
        setIsUnique(result ? true : false )
    }

    let code = `
    import React,{useState} from 'react';
    import CodeDisplay from '../../codeDisplay/CodeDisplay';


const IsUnique = ()=>{
    const [inputVal,setInputVal] = useState('');
    const [isUnique,setIsUnique] = useState(null)

    /*
        function to check if string is valid
        @param {String}
        @return {Boolean}
     */
    const checkUnique = string =>{
         // O(n^2) approach, no additional data structures used
        // for each character, check remaining characters for duplicates
        for (var i = 0; i < string.length; i++) {
            for (var j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false; // if match, return false
            }
            }
        }
        return true; // if no match, return true
    };
        
    const handleCheckUnique = string => {
        let result = checkUnique(inputVal);
        setIsUnique(result ? true : false )
    }

    return(
        <div className='problems-container'>
            <div className='problem-display'>
                Enter A String
                <input onChange={e=>setInputVal(e.target.value)} ></input>
                <button onClick={()=>{handleCheckUnique()}}>Submit</button>
                This string is {isUnique ? 'Unique': 'Not Unique'}
            </div>
            <CodeDisplay code={code}/>
        </div>
    )
}
    
    `
    return(
        <div className={isSideMenu ? 'problems-container' : 'problems-container slide'}>
            <div className='problem-display'>
                <div className='problem-header'>
                    isUnique
                </div>
                <div className='problem-detail'>
                    <p>Enter a string to check if a string is Unique</p>
                    <p>
                        A String is Unique if there is no repeat letter.
                    </p>
                </div>
                <div className='problem-content'>
                    <input onChange={e=>setInputVal(e.target.value)} ></input>
                    <button onClick={()=>{handleCheckUnique()}}>Submit</button> <br/>
                    This string is {isUnique ? 'Unique': 'Not Unique'}
                </div>
            </div>
            <CodeDisplay code={code}/>
        </div>
    )
}

export default IsUnique