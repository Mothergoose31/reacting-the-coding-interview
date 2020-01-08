import React, {useState,useEffect} from 'react';
import NavBar from './components/navbar/NavBar'
import './App.css';
import SplashScreen from './components/splashScreen/SplashScreen'
import SideMenu from "./components/sideMenu/SideMenu";

function App() {
  const [isLoading,setLoading] = useState(true) // set initial loading state to true 
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000) //set splashing screen time on mount to 2s, can disable for development
  },[])
  
  return (
  <div id="App">
  {isLoading? <SplashScreen/> : 
    <>           
    {/* // if loading, display splash screen, else display app */}
      <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id ="page-wrap">
        <NavBar/>
        <div>
          <h1>Hello</h1>
        </div>
      </div>  
    </>         
  }
  </div>
  )
}

export default App;
