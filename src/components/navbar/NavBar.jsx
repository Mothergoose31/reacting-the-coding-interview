import React, { Component } from 'react'
import SplashScreen from '../splashScreen/SplashScreen';
import IsUnique from '../problems/isUnique/IsUnique'

export default class NavBar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <ul id="nav">
                    <button onClick={()=>this.props.handleChange(<SplashScreen/>)}>SplashScreen</button>
                    <button onClick={()=>this.props.handleChange(<IsUnique/>)}>IsUnique</button>
                    <li><a href="#">Burger Menu </a></li>
                    <li><a href="#">Dank Logo</a></li>
                    <li><a href="#"> About</a></li>
                </ul>
            </div>
        )
    }
}
