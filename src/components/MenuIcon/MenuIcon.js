import React, { PropTypes, Component } from 'react';
import styles from './MenuIcon.css';
import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class MenuIcon extends Component {


  render() {
    return !this.props.error ? (
      <div className="MenuIconContainer" onMouseOver={this.props.hoverOn} >
        <a href={this.props.url} title={this.props.alt}>
          {this.props.children}
        </a>
      </div>
    ) : this.props.children;
  }
}
export default MenuIcon;
