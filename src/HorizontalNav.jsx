import React from "react";
import "./HorizontalNav.css";

export default function HorizontalNav(props) {

  return (
    <header id='header' style={props.styles}>
        <nav id="Nav" className='navMenu'>
          <ul id='leftNav'>
            <li>{props.title}</li>
            <li>{props.buttonLeft}</li>
          </ul>
          <ul id='rightNav'>
            <li>{props.buttonRightOne}</li>
            <li>{props.buttonRightTwo}</li>
            <li>{props.buttonRightThree}</li>
          </ul>
        </nav>
    </header>
  );
}
