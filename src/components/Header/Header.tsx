import * as React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

export interface IHeaderProps {
  logoText: string;
};

const Header: React.SFC<IHeaderProps> = ({ logoText }) => {
  return (
    <div className="header">
      <Logo />
    </div>
  );
}

export default Header;