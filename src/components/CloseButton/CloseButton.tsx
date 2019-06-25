import * as React from 'react';
import * as actions from '../../actions/index';
import { IHideListItemAction } from '../../actions/index'
import './CloseButton.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface ICloseButtonProps {
  hideListItem: (e: any) => IHideListItemAction;
}

class CloseButton extends React.Component<ICloseButtonProps> {
  public render() {
    return (
      <a className="closeButton" href="#" onClick={() => this.props.hideListItem(false)}>
        <span>X</span>
      </a>
    );
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IHideListItemAction>) {
  return {
    hideListItem: () => dispatch(actions.hideListItem(false))
  }
}

export default connect(null, mapDispatchToProps)(CloseButton)