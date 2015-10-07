/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Icon.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Icon extends Component {

  render() {
    var imageurl = this.props.image;
    return !this.props.error ? (
      <div className="Icon-Container hvr-rotate">
        <a href={this.props.url} title={this.props.alt}>
          {this.props.children}
        </a>
      </div>
    ) : this.props.children;
  }
}

export default Icon;
