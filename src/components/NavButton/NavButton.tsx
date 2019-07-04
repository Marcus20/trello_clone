import * as React from 'react';
import './NavButton.css';

interface INavButtonProps {
  styleType: string;
  buttonText: string;
}

const NavButton: React.FunctionComponent<INavButtonProps> = ({ styleType, buttonText }) => (
  <div className={`${styleType} nav-button`}>
    <a href="#">
      {buttonText}
    </a>
  </div>
);


export default NavButton;