import * as React from 'react';
import Button from '../Button/CallOutButton';
import CloseButton from '../CloseButton/CloseButton';
import Input from '../Input/Input';
import './EnterListItem.css';

const EnterListItem: React.FC<{}> = () => {
  return (
    <div className="listItemContainer">
      <Input />
      <Button color="white" buttonColor="green" buttonText="Add List" />
      <CloseButton />
    </div>
  );
}

export default EnterListItem;