import * as React from 'react';
import './Input.css';

const Input: React.FC<{}> = () => {
  return (
    <div className="inputContainer">
      <input type="text" placeholder="Enter list title..." />
    </div>
  );
}

export default Input;