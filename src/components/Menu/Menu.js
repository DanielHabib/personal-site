import React, { PropTypes, Component } from 'react';
import styles from './Menu.css';
import withStyles from '../../decorators/withStyles';
import MenuIcon from '../MenuIcon';
import IconBar from '../IconBar';
import $ from 'jquery';

@withStyles(styles)
class Menu extends Component {

    socialHoverOn() {
        $('.IconBar-container').css('display', 'table');
    }

    socialHoverOff() {
        $('.IconBar-container').css('display', 'none');

    }

  render() {
    return !this.props.error ? (
      <div id="Menu-container">
        <li className="listOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="">
                    <img className="Menu-Icon-Image" src={require('./blog-image.png')} alt="blog" width="80" height="80"/>
                </MenuIcon>
            </span>
        </li>
        <li className="listOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="">
                    <img className="Menu-Icon-Image" src={require('./apps-icon.png')} alt="apps" width="80" height="80"/>
                </MenuIcon>
            </span>
        </li>
        <li className="listOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="">
                    <img className="Menu-Icon-Image" src={require('./map-pin.png')} alt="apps" width="80" height="80"/>
                </MenuIcon>
            </span>
        </li>
        <li className="listOrganizer" id="socialOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="" className="MenuIcon" hoverOn={this.socialHoverOn} hoverOff={this.socialHoverOff}>
                    <img className="Menu-Icon-Image" src={require('./social-icon.png')} alt="apps" width="80" height="80"/>
                </MenuIcon>
                <IconBar />
            </span>
        </li>
      </div>
    ) : this.props.children;
  }
}
export default Menu;
