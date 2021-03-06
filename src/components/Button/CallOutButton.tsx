import * as React from 'react';
import './CallOutButton.css';

interface IButtonProps {
  color: string;
  buttonText: string;
  buttonColor: string;
}

const Button: React.FC<IButtonProps> = (
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