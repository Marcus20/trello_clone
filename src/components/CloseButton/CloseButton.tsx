import * as React from 'react';
import './CloseButton.css';
class CloseButton extends React.Component<{}> {
  public render() {
    return (
      <a className="closeButton" href="#" onClick={() => console.log('Closed button clickedS')}>
        <span>X</span>
      </a>
    );
  }
}

export default CloseButton;