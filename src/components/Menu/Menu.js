import React, { PropTypes, Component } from 'react';
import styles from './Menu.css';
import withStyles from '../../decorators/withStyles';
import MenuIcon from '../MenuIcon';
import IconBar from '../IconBar';
import WorldMap from '../WorldMap';
import VacationList from '../VacationList';
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
        this.mapHoverOff();
        var iconBar = $('#IconBar-container');
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
        var worldMap = $('.WorldMap-container');

        if (worldMap.css('display')==='none'){
            worldMap.css('display', 'inline');
            console.log(worldMap.attr('class'));

        }

    }

    blogHoverOn() {
        this.socialHoverOff();
        this.mapHoverOff();
    }

    appsHoverOn() {
        this.socialHoverOff();
        this.mapHoverOff();
    }

    mapHoverOff() {

        var worldMap = $('.WorldMap-container');
        worldMap.css('display', 'none');
    }

    socialHoverOff() {
        var iconBar = $('#IconBar-container');
        iconBar.css('display', 'none');
        iconBar.removeClass("IconBar-container");
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
                <WorldMap />
                <VacationList />
            </span>
        </li>
        <li className="listOrganizer" >
            <span className="menu-span">
                <MenuIcon url="" title="" id="SocialIcon" hoverOn={this.socialHoverOn.bind(this)} >
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
