import * as React from 'react';
import * as actions from '../../actions/index';
import { IAddListItemAction } from '../../actions/index'
import { IStoreState } from '../../Root';
import EnterListItem from '../EnterListItem/EnterListItem';
import './AddList.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface IAddListProps {
  buttonText: string;
  addListItem: (e: any) => IAddListItemAction;
  showListInput?: boolean;
}

class AddList extends React.Component<IAddListProps> {

  public render() {
    return (
      <div className="addListItem">
        {!this.props.showListInput ? (
          <button onClick={this.props.addListItem}>
            <span>+ {this.props.buttonText}</span>
          </button>
        ) : (
            <EnterListItem />
          )
        }
      </div>
    )
  }
}

export function mapStateToProps({ showListInput }: IStoreState) {
  return {
    showListInput
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IAddListItemAction>) {
  return {
    addListItem: () => dispatch(actions.addListItem(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList);

