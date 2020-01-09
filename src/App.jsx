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

  const items = [
    { name: 'home', label: 'Home' },
    { name: 'chaper 1', label: 'Chapter 1' },
    { name: 'chapter 2', label: 'Chapter 2' },
    { name: 'chaper 3', label: 'Chapter 3' },
    { name: 'chapter 4', label: 'Chapter 4' },
    { name: 'chaper 8', label: 'Chapter 8' },
    { name: 'chapter 10', label: 'Chapter 10' },
  ]

  
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
  <div id="App">
 
    <>           
    {/* // if loading, display splash screen, else display app */}
      
      <div id="page-wrap">
        <NavBar toggleSideMenu={toggleSideMenu}/>
        
        <SideMenu isSideMenu={isSideMenu} items={items}/>
        <IsUnique/>
      </div>  
    </>         
  
  </div>
  )
}

export default App;
