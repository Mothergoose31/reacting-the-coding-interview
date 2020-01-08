import React from "react";
import { slide as Menu } from "react-burger-menu";

// Library extension for side menu for now, thinking about using hooks for [open,setOpen] and having a 
//event listener Onclick 
// also thinking about using Sass  for a function within the css allowing  transform to change style 
// like so 
//  transform : ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/ChapterOne">
        Chapter 1 Problems
      </a>

      <a className="menu-item" href="/ChaterTwo">
        Chapter 2 Problems
      </a>

      <a className="menu-item" href="/ChapterThree">
        Chapter 3 Problems
      </a>

      <a className="menu-item" href="/ChapterFour">
        Chapter 4 Problems
      </a>
      <a className="menu-item" href="/ChapterEight">
        Chapter 8 Problems
      </a>
      <a className="menu-item" href="/ChapterTen">
        Chapter 10 Problems
      </a>
    </Menu>
  );
};



