import * as React from 'react';
import './Input.css';


class Input extends React.Component {
  public render() {
    return (
      <div className="inputContainer">
        <input type="text" placeholder="Enter list title..." />
      </div>
    );
  }
}

export default Input;