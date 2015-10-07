import React, { PropTypes, Component } from 'react';
import styles from './Menu.css';
import withStyles from '../../decorators/withStyles';
import MenuIcon from '../MenuIcon';
import IconBar from '../IconBar';
import $ from 'jquery';

@withStyles(styles)
class Menu extends Component {



    constructor() {
        super();
        this.state = {
            flag: false,
        };
    };

    socialHoverOn() {
        var iconBar = $('#IconBar-container');
        console.log(this.state.flag);
        if (this.state.flag){
            return;
        }
        if (iconBar.css('display')==='none'){
            iconBar.css('display', 'table');
            iconBar.addClass("IconBar-container");
            this.state.flag = true;
            setTimeout(this.flipFlag.bind(this), 800);
        }
        else{
            iconBar.removeClass("IconBar-container");
        }
    }
    flipFlag(){
        this.state.flag = false;
    }
    mapHoverOn() {
        this.socialHoverOff();
    }
    blogHoverOn() {
        this.socialHoverOff();
    }
    appsHoverOn() {
        this.socialHoverOff();
    }
    socialHoverOff() {
        var iconBar = $('#IconBar-container');
        iconBar.css('display', 'none');
        iconBar.removeClass("IconBar-container");
        console.log("out");
        console.log(iconBar.attr('class'));
    }

  render() {
    return !this.props.error ? (
      <div id="Menu-container">
        <li className="listOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="" hoverOn={this.blogHoverOn.bind(this)}>
                    <img className="Menu-Icon-Image" src={require('./blog-image.png')} alt="blog" width="80" height="80"/>
                </MenuIcon>
            </span>
        </li>
        <li className="listOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="" hoverOn={this.appsHoverOn.bind(this)}>
                    <img className="Menu-Icon-Image" src={require('./apps-icon.png')} alt="apps" width="80" height="80"/>
                </MenuIcon>
            </span>
        </li>
        <li className="listOrganizer">
            <span className="menu-span">
                <MenuIcon url="" title="" hoverOn={this.mapHoverOn.bind(this)}>
                    <img className="Menu-Icon-Image" src={require('./map-pin.png')} alt="map" width="80" height="80"/>
                </MenuIcon>
            </span>
        </li>
        <li className="listOrganizer" >
            <span className="menu-span">
                <MenuIcon url="" title=""  hoverOn={this.socialHoverOn.bind(this)} >
                    <img className="Menu-Icon-Image" src={require('./social-icon.png')} alt="apps" width="80" height="80"/>
                </MenuIcon>
                <IconBar />
            </span>
            <div className="fadingEffect"></div>
        </li>
      </div>
    ) : this.props.children;
  }
}
export default Menu;
