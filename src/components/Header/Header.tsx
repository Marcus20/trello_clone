import * as React from 'react';
import './Header.css';

export interface IHeaderProps {
  logoText: string;
};

const Header: React.FC<IHeaderProps> = ({ logoText }) => {
  return (
    <div className="header">
      <span>{logoText}</span>
    </div>
  )
}

export default Header;