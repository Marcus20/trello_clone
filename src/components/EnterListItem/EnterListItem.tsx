import * as React from 'react';
import Button from '../Button/Button';
import CloseButton from '../CloseButton/CloseButton';
import Input from '../Input/Input';
import './EnterListItem.css';
// import Button from '../Button/Button';


// interface IEnterListItemProps {

// }

// interface IEnterListItemState {

// }

class EnterListItem extends React.Component {

  public render() {
    return (
      <div className="listItemContainer">
        <Input />
        <Button color="white" buttonColor="green" buttonText="Add List" />
        <CloseButton />
      </div>
    );
  }
}

export default EnterListItem;