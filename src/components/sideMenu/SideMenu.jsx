import React from 'react';
import {List,ListItem,ListItemText} from "@material-ui/core/";


const SideMenu = ({isSideMenu,items})=>{
    return(
        <div className={isSideMenu ? 'sideMenu' : 'sideMenu hidden'}>
            <div className="SideMenu">
        <List disablePadding dense>
            {items.map(({ label, name, ...rest }) => (
            <ListItem key={name} button {...rest}>
                <ListItemText>{label}</ListItemText>
            </ListItem>
            ))}
        </List>
        </div>
        </div>
    )
}

export default SideMenu



