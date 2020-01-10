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

  //items that are rendered in the side menu
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
  
  function handleChange(data)  {
    setRender(data)
  }

  const toggleSideMenu = ()=>{
    setSideMenu(isSideMenu === true ? false : true )
  }
  
  return (
  <div className="App">
        <NavBar toggleSideMenu={toggleSideMenu}/>
        <div className='main'>
          <SideMenu isSideMenu={isSideMenu} items={items}/>
          <IsUnique isSideMenu={isSideMenu}/>
        </div>
  </div>
  )
}

export default App;
