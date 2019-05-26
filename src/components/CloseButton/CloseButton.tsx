import * as React from 'react';
import * as actions from '../../actions/index';
import './CloseButton.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface ICloseButtonProps {
  hideListItem: () => void;
}

class CloseButton extends React.Component<ICloseButtonProps> {
  public render() {
    return (
      <a className="closeButton" href="#" onClick={this.props.hideListItem}>
        <span>X</span>
      </a>
    );
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IHideListItemAction>) {
  return {
    hideListItem: () => dispatch(actions.hideListItem())
  }
}

export default connect(null, mapDispatchToProps)(CloseButton)