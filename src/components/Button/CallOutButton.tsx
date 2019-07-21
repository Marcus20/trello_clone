import * as React from 'react';
import './CallOutButton.css';

interface IButtonProps {
  color: string;
  buttonColor: string;
  buttonText: string;
}

const Button: React.SFC<IButtonProps> = (
  {
    color,
    buttonText,
    buttonColor
  }) => {
  return (
    <button style={{
      backgroundColor: buttonColor,
      color
    }}>
      {buttonText}
    </button>
  );
}

export default Button;