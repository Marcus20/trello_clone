import * as React from 'react';
import * as actions from '../../actions/index';
import './AddList.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface IAddListProps {
  buttonText: string;
  addListItem?: () => void;
}

class AddList extends React.Component<IAddListProps> {

  public render() {
    return (
      <div className="addListItem">
        <button onClick={this.props.addListItem}>
          <span>+ {this.props.buttonText}</span>
        </button>
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IAddListItemAction>) {
  return {
    addListItem: () => dispatch(actions.addListItem())
  }
}

export default connect(null, mapDispatchToProps)(AddList);

