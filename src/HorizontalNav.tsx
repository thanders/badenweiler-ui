import React from "react";
import "./HorizontalNav.css";

interface HorizontalNavProps {
  title: { title: string };
  buttonLeft: React.ReactNode;
  buttonRightOne: React.ReactNode;
  buttonRightTwo: React.ReactNode;
  buttonRightThree: React.ReactNode;
  styles: React.CSSProperties;
}

export default function HorizontalNav(props: HorizontalNavProps) {

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
