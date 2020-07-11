import * as React from 'react';
import './AddList.css';

export interface IAddListProps {
  buttonText: string;
}

const AddList: React.FC<IAddListProps> = ({ buttonText }) => {
  return (
    <div className="addListItem">
      <button onClick={() => console.log('Board button pressed')}>
        <span>{buttonText}</span>
      </button>
    </div>
  )
}

export default AddList;

