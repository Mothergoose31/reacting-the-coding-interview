import React from 'react';

const SideMenu = ({isSideMenu})=>{
    return(
        <div className={isSideMenu ? 'sideMenu' : 'sideMenu hidden'}>
            <ul>
                <li>1</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default SideMenu


