import React, {useState,useEffect} from 'react';
import NavBar from './components/navbar/NavBar'
import './App.css';
import SplashScreen from './components/splashScreen/SplashScreen'

function App() {
  const [isLoading,setLoading] = useState(true) // set initial loading state to true 
  const [render,setRender] = useState('none')
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },2000) //set splashing screen time on mount to 2s, can disable for development
  // },[]);
  
  const handleChange = data => {
    setRender(data)
  }
  
  return (
          <>      
              <div>
                <NavBar handleChange={handleChange}/>
                <div>
                  <h1>Hello</h1>
                </div>
                {render}
              </div>         
          </>
  )
}

export default App;
