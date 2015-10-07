import React, { PropTypes, Component } from 'react';
import styles from './IconBar.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Icon from '../Icon';

@withStyles(styles)
class IconBar extends Component {

  render() {
    var iconList = {
     github: "https://github.com/DanielHabib",
      twitter: "https://twitter.com/dannyhabibs",
      facebook: "https://www.facebook.com/daniel.habib1",
      linkedin:"https://www.linkedin.com/pub/daniel-habib/67/57/5b3"
    };

    return !this.props.error ? (
      <div id="IconBar-container" className="IconBar-container">
        <span className="icon-span">
            <Icon url={iconList.github} alt="Github">
              <img className="Icon-Image" src={require('./GitHub-Mark.png')} alt="Github" width="60" height="60"/>
            </Icon>
        </span>
        <span className="icon-span">
            <Icon url={iconList.twitter} image="" alt="Twitter">
              <img className="Icon-Image" src={require('./Twitter-Mark.png')} alt="Twitter" width="60" height="60"/>
            </Icon>
        </span>
        <span className="icon-span">
            <Icon url={iconList.facebook} image="" alt="Facebook">
              <img className="Icon-Image" src={require('./Facebook-Mark.png')} alt="Facebook" width="60" height="60"/>
            </Icon>
        </span>
        <span className="icon-span">
            <Icon url={iconList.linkedin} image="" alt="Linkedin">
              <img className="Icon-Image" src={require('./Linkedin-Mark.png')} alt="Linkedin" width="60" height="60"/>
            </Icon>
        </span>
      </div>
    ) : this.props.children;
  }
}
export default IconBar;
