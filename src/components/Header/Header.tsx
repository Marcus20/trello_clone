import * as React from 'react';
import './Header.css';

export interface IHeaderProps {
  logoText?: string;
};

const Header: React.SFC<IHeaderProps> = ({ logoText }) => {
  return (
    <div className="header">
      <h1>Welcome to fake Trello!</h1>
    </div>
  );
}

export default Header;