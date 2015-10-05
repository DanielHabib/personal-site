import React, { PropTypes, Component } from 'react';
import styles from './MainLabel.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class MainLabel extends Component {

  render() {

    return !this.props.error ? (
      <div id="MainLabel-container">
      </div>
    ) : this.props.children;
  }
}
export default MainLabel;
