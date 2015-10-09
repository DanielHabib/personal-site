import React, { Component } from 'react';
import VacationItem from '../VacationItem'
import styles from './VacationList.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class VacationList extends Component {

  render() {
    return (
      <ul className="VacationList">
        <VacationItem destination="Spain" />
        <VacationItem destination="Germany" />
        <VacationItem destination="Norway" />
        <VacationItem destination="Germany" />
      </ul>
    );
  }
}

export default VacationList;
