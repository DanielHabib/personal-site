import React, { Component } from 'react';
import styles from './VacationItem.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class VacationItem extends Component {

  render() {
    return (
      <li>
        <div className="VacationItem">
          <p>{this.props.destination}</p>
        </div>
      </li>
    );
  }
}

export default VacationItem;
