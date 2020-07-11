import * as React from 'react';
import './CloseButton.css';

const CloseButton: React.FC<{}> = () => {
  return (
    <a className="closeButton" href="#" onClick={() => console.log('Closed button clickedS')}>
      <span>X</span>
    </a>
  );
}

export default CloseButton;