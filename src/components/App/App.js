import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import IconBar from '../IconBar';
import MainLabel from '../MainLabel';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header name="Daniel Habib" />
        <MainLabel text="Wuts ^" />
        <IconBar />
      </div>
    ) : this.props.children;
  }
}

export default App;
