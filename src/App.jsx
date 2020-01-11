import React, {useState,useEffect} from 'react';
import NavBar from './components/navbar/NavBar';
import SideMenu from './components/sideMenu/SideMenu';
import SplashScreen from './components/splashScreen/SplashScreen'
import IsUnique from './components/problems/isUnique/IsUnique';
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './App.css';

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
  console.log(item.name)
}


const items = [
  { name: 'home', label: 'Home',Icon:HomeIcon },
  { name: 'chaper 1', label: 'Chapter 1', Icon: MenuBookIcon},
  {name:"problem 1.1",label:"Problem 1.1",onClick},
  { name: 'chapter 2', label: 'Chapter 2',Icon: MenuBookIcon},
  {name:"problem 2.1",label:"Problem 2.1",onClick},
  { name: 'chaper 3', label: 'Chapter 3' },
  { name: 'chapter 4', label: 'Chapter 4' },
  { name: 'chaper 8', label: 'Chapter 8' },
  { name: 'chapter 10', label: 'Chapter 10' },

]

function App() {
  const [isLoading,setLoading] = useState(true) // set initial loading state to true 
  const [isSideMenu,setSideMenu] = useState(true)
  const [render,setRender] = useState('none')

  //items that are rendered in the side menu

  
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
          <SideMenu isSideMenu={isSideMenu} items={items}/>
          <IsUnique isSideMenu={isSideMenu}/>
        </div>
  </div>
  )
}

export default App;
