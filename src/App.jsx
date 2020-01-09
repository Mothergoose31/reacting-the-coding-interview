import React, {useState,useEffect} from 'react';
import NavBar from './components/navbar/NavBar';
import SideMenu from './components/sideMenu/SideMenu';
import './App.css';
import SplashScreen from './components/splashScreen/SplashScreen'
import IsUnique from './components/problems/isUnique/IsUnique';

function App() {
  const [isLoading,setLoading] = useState(true) // set initial loading state to true 
  const [isSideMenu,setSideMenu] = useState(true)
  const [render,setRender] = useState('none')
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000) //set splashing screen time on mount to 2s, can disable for development
  },[]);
  
  const handleChange = data => {
    setRender(data)
  }

  const toggleSideMenu = ()=>{
    setSideMenu(isSideMenu === true ? false : true )
  }
  
  return (
  <div className="App">
        <NavBar toggleSideMenu={toggleSideMenu}/>
        <div className='main'>
          <SideMenu isSideMenu={isSideMenu}/>
          <IsUnique isSideMenu={isSideMenu}/>
        </div>
       
  </div>
  )
}

export default App;
