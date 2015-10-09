import React, { Component } from 'react';
import less from 'less';
import styles from './WorldMap.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class WorldMap extends Component {

  addMap() {

  }
  render() {
    var svgString ='<figure class="slideExpandUp"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 136 166" xml:space="preserve"> <ellipse id="shad" cx="68" cy="150" rx="40" ry="10" /> <g clip-path="url(#outer)"> <use id="sea" xlink:href="#circ" /> <g id="boat1" class="vehicles"> <use xlink:href="#boat" /> </g> <g id="land"> <use xlink:href="#map" transform="translate(300,-309)" /> <use xlink:href="#map" transform="translate(600,-309)" /> </g> <rect id="hi" mask="url(#light)" width="300" height="300" /> </g> <defs> <clipPath id="outer"> <circle id="circ" cx="68" cy="68" r="68" /> </clipPath> <mask id="light"> <use xlink:href="#circ" x="-5" y="-12" /> </mask> <path id="map" d="M-205.3,444.2c-1-0.2-1.4-0.7-1.2-1.6c0.6-1.5,4.1,1.4,4.9,1.6C-204,444.3-202.8,444.6-205.3,444.2z M-207.9,442c-0.8-0.4-6.6-5.2-5.7-6.4c1-1.4,0.9-1.2,0.3-3c-1.1-3.4-2.3-5-2.2-8.9c0.1-4.6,0.6-14.7-3.4-17.9 c-2.2-1.7-3.9-2.7-5.4-5.3c-0.8-1.5-3.6-5.2-3.9-6.7c-0.8-4.6,4.2-8,3.1-13.1c-0.5-2.3-6,1.2-7.3-3.5c-1-3.5-6.8-4.7-9.5-4.9 c-1.7-0.1-3.7-1.4-5-2.3c-2.9-1.9-1.2-3.1-2.7-5.6c-0.9-1.4-3.2-7.7-4.4-8.2c-2-0.9,0.8,8.4,1.3,8.4c-2.1-0.1-4.4-10.4-5.3-11.7 c-2.3-3.6,0.3-7.4,2.4-10.2c1.4-1.9,3.2-2.3,3.8-3.6c0-0.1-1.5-4.1-1.7-4.5c-0.7-1.3,2.3-3.6-0.6-5.3c-8.7-5-13,2.8-21.2,2.7 c0.8,0,4.6-2,5-2.7c-0.1,0.1-2.4-0.5-2.7-0.6c0.5-0.2,7.2-6.2,7.6-5.1c0-0.1-3.6,0.4-3.3-0.3c1.6-1.5,3.8-0.4,5.6-1.5 c-2.3-2.2,6.2-3.1,7.6-3.2c4.8-0.4,10.2,2.3,14.7,1.1c1.2-0.3,11.8-1.4,12.2,0.6c-1.3,1.1,7.3,0.7,9,0.8c1.5,0,3.2-0.2,4.7-0.6 c2.2-0.6-0.2-1.3,2.1-2.4c1.5-0.7,2.2,1.6,2.8,2.6c0.7,1.2,2.6-1.5,4-1c1.8,0.7-7.2,4.9-7.4,3.1c0.3,0.4,0.5,0.7,0.8,1 c-2.3,0.7-8.8,2.3-9.6,5.1c-0.5,1.5,4.9,3.5,5.7,3.6c1.9,0.4-0.9,4,1.1,3.9c3-0.1,5.7-7.3,7.3-9.2c1.2-1.4,4.9-2.1,5.6,0.3 c1.4,4.4,0.7,0.6,3.8,0.4c0.8,0,0.5,5.4,0.5,5.8c0,0.4,5.7,0.7-0.4,3c-2.5,0.9-5.1,0.1-7.5,1.2c0.5-0.2-3.3,1.6-2.3,1.8 c0.3,0,4.7-1.5,4.3-0.7c-0.2,0.4,0.5,6.7-2.6,4.7c-0.8-0.5,2-1.1,1.9-1.6c-0.8-2.2-12.8,7.5-13.2,7.1c1.5,0.3-6.8,8-6.7,8 c-0.4,1.3,0.2,2.9,0.1,4.3c-0.2,2.6-1.7-0.1-1.7-1.3c0-5.1-5.7-1.1-7.6-2c-4.4-2-8.6,5-7.4,8.8c0.8,2.4,3.1,3.4,5.3,2 c0,0,4.4-4.8,4.2-1.8c-0.3,4.2-4.5,4.3,1.4,5.1c2.4,0.3,0.4,3.6,0.6,5c0.4,2.7,2.6,1.5,4.3,1.8c2.2,0.5,2,0.4,3.7-1 c0.3-0.2,3.2-2.7,3.5-2.1c-0.1,0.2-1.3,3.4-0.3,3.3c0.8-0.1,0.5-1.3,0.5-1.7c0.2-2.2,4,0.1,4.7,0.4c1.8,0.6,2.9-0.2,4.6,1.3 c2,1.7,2.9,3.1,5.6,3.5c3.6,0.6,3.5,3.9,5.5,6c2.8,2.8,4.7,1.7,8,2.7c4.9,1.6,6,3.9,3.4,8.1c-2.2,3.5-0.6,9.3-3.9,12.1 c-0.3,0.3-2.9,1-3.4,1.2c-2.8,1.3-1.4,1.7-2.3,4.1c-0.9,2.2-1.7,4.6-3.3,6.4c-0.4,0.5-4,0.4-4,0.2c0,1.4,2.6,1.4,1.8,3.2 c-0.9,1-2,1.4-3.3,1.3c-0.4,0.8-0.6,1.6-0.6,2.4c-0.5-0.3-1.1-0.4-1.7-0.5c1.2-1.2,0.1,5.7,0,5.2c0.5,2,1.9,1.4,0.9,4 C-206.7,439.8-206.2,442.9-207.9,442z M-224.5,344.4c0.4-0.9,1.8-2.9,3.1-2.1c-0.1,0.6-0.4,1-0.8,1.4c1.4,1.7,4.8-1.7,3-2 c-3.5-0.6-3.8-4.8-8.3-0.9c1.1,0.5,4.6-0.9,5.4,0.4c-0.2-0.4-5.8,2.8-4.2,4.6C-225.3,346.1-224.7,345.6-224.5,344.4 C-224.1,343.6-224.7,344.9-224.5,344.4z M-220.4,345.8c0.8-0.4,0.9-0.5,0.6-0.8c-0.7-0.7-2,0.3-2.2,1 C-222.3,346.9-219.5,345.3-220.4,345.8C-219.6,345.3-220.9,346-220.4,345.8z M-216.4,344.1c1.3-0.9-1.8-0.9-1.8,0 C-218.2,345-215.9,343.7-216.4,344.1C-215.9,343.7-217,344.5-216.4,344.1z M-199.4,441.4c0-1.6,0.4,0.5-0.8-0.2 c-0.8-0.5,1.7-1.2,2.2-0.5C-197.8,441-199.4,442-199.4,441.4z M-11.1,435.8c0,0,8.2-6.3,8.9-5.2C-1.3,431.8-9.5,436.8-11.1,435.8z M-26.9,432.8c-2.4-1.5,2.2-2.2,3-2.1C-24.8,430.6-25.3,433.8-26.9,432.8z M-0.9,430.9c-0.9-0.9,4.5-5,2.9-6.4 c-0.2-0.2,1.6,4.3,2.1,3.1C3.8,428.3-0.1,431.6-0.9,430.9z M-24.7,428c-0.9-0.9-2.5,0.1-3.6-0.7c-0.6-0.5,0.3-3.3-0.7-3.4 c-0.2,0.3-0.5,0.5-0.8,0.6c0.4-0.6,0.8-1.3,1.1-2c-0.3-0.2-2.1,0.9-2.3,1.4c1.4-3.8-7-2.4-8-2.1c-2.1,0.7-4.2,1.1-6.2,1.8 c-0.8,0.3-4.8-0.2-3.7-0.6c2.7-1,0.1-8.9,1.9-11.3c0.9-1.2,2.6-1.6,3.9-2.1c2.4-0.9,3-2.3,4.9-3.4c1.1-0.7,3.1-3.6,4.8-2.8 c3,1.3,4.4-5,8-2c0.4,0.3-0.6,6.7,3.4,5.4c2-0.7,1.5-6.6,3-6.6c1.9,0,2,7.1,2.4,7.6c1.4,2.1,4.5,5.4,4.2,8 C-13,419.7-20.3,429.7-24.7,428z M-134.7,423.2c-0.8-0.8-3.1-6.5-3.3-7.5c-0.5-3.2-3.4-7.7-3-10.7c0.5-3.7,2.7-5.8,0.8-9.7 c-0.8-1.6-1.6-2.8-2.7-4.2c-1.5-2,0.6-4-0.3-6.2c-0.1-0.4-4-2.6-4.7-2.9c-1.6-0.8-7.8,0.9-9.6,1.4c-5.2,1.4-9.5-8.4-9.6-8.4 c-1.1-1-0.5-8.4,0.1-9.4c1.2-2.3,2.5-4.6,4.6-6.1c2-1.5,1.5-3.2,3.1-4.7c2.8-2.5,8.1-4,12.4-3.7c1.4,0.1,2.9-0.6,4.3-0.2 c1.2,0.4-0.7,3.1,2,3.9c1.9,0.6,3.6,2.5,5.5,2.8c2.3,0.4,0.8-2.6,2.6-2.6c2.6,0,9.4,4.2,11.7,1.6c1.4-1.5,2.3-6.5-1-5.2 c-1.6,0.7-8.5-2.4-6.6-3.6c3.8-1.8,6.1-1.6,10.1-0.8c2.3,0.5,3.4-1.4,1.3-2.8c-2.7-1.8-2.3-0.8-1.8-3.8c0.1-0.8-5.1,1.7-2.3,1.8 c-1.9,0-1.6,0.7-2.9-1.1c-0.4-0.5-5.6,3.8-2.5,5.5c-1.5,0.4-3.8-0.2-5.1,0.9c-0.4,0.4,1.3,3.7-0.2,3.5c-1.9-0.3-0.1-1.8-0.1-1.9 c-0.7-0.3-1.3-0.6-2-0.9c-0.4-0.9-0.8-1.8-1.1-2.7c-1.1-1.3-3.4-2.6-5-3.3c-3-1.2,3.6,5.4,4.6,5.2c-1.2,0.6-1.9,1.6-2.3,2.2 c0.6-2-1.7-3.1-3.1-4c-2.8-1.9-1.7-1.9-5.1-1.6c-4.1,0.4-4.3,5.4-7.6,6.3c-4.5,1.3-6.3,0.3-5.5-4.9c0.5-2.8,3.3-1,5.2-1.1 c4.5-0.1-0.7-4.8-0.7-5.1c0.7-1,3.6-0.7,4.7-1.9c1-1,3.2-2.7,4.5-3.1c1.3-0.4,3.1-6,4.4-2.5c0.6,1.6-1.6,0.4-1.8,0.6 c-1,1,4.2,1.3,4.8,1.1c0.9-0.3,3,0.4,3.5-0.7c0.1-0.8,0.2-1.6,0.5-2.3c0.7,0,1.3,0,2-0.1c0.7-0.7-1.1-1.2-0.4-1.7 c0.2-0.2,4.4-0.1,4-0.9c-0.8-1.4-3.6,0.2-4.9-0.4c-3.1-1.4,1.8-3.1,0.4-4.7c-0.9-1.1-7.1,3.9-3.8,5c0.9,0.3-1.5,2.8-1.7,3.2 c-1.9,3-2.9-1-4-2.2c-2.4,1.6-2.9,0.7-3.8-1.6c-0.5-1.3,4.8-3.1,5.4-4.2c2-3.8,7.5-5.1,11.4-4.2c1.3,0.3,7.7,1.3,8.2,2.7 c0.5,1.2-5,0.1-5.5,0.2c0.1,0,1.9,3.6,3.7,2.9c2-0.8,2.7-2,5-2.6c0.5-0.1,7.8-2.1,7.8-1.9c0-2.8,6.9,1.7,7.1,0.3c0,0-3.1-6,1-3 c0.6,0.4,3,5.4,2.1,5.1c3.7,1.4,0.1-4.7-0.1-4.3c1.9-2.9,22.2-6.8,22.1-3.3c0,0.2-2.4,1.3-2.1,1.6c0.7,0.8,4.7-0.1,5.7-0.2 c3.1-0.2,7.2-0.3,10,1.2c1.6,0.9,4.4,1.2,6.2,0.8c4.1-0.9,6.2-0.3,10.5,0.2c5.6,0.5,11.6,0.3,16.7,1c0.8,0.1,14.3,3.5,13.9,3.9 c-0.8,1.1-3.7-1.1-4.9-0.4c-2,1.2,2.3,2.3,2.7,2.6c0.1,0.1-7.7,2.5-8.1,2.8c-0.1,0,5.8,7.1,3.1,8c-1.5,0.5-4-3.3-4.7-4.2 c-0.6-0.7-0.7-6.8-1.3-6.4c-1.8,1.3-1.1,0.5-3.5,0.8c-0.8,0.1-1.1,0.6-0.9,1.4c-0.3,1.9-2.7,0.4-3.8,0.5c-3.1,0.3-4.2-0.1-5.4,2.9 c-1,2.5,3.3,1.9,4.7,2.9c2,1.4,3.3,4.4,3,6.8c-0.4,3.7-2,1.9-3.6,3.7c-3.3,3.9,4.8,6.3,0.4,8.5c-0.9-2.1-2.6-2.7-3.6-4.5 c-1.2-2.2-2.4,0.5-3-0.7c-0.7-1.3-0.8-1.9-2.3-0.5c-2.8,2.6,2.6,2.4,4,2.8c-1.7,1.1-2.8,2.2-1,3.8c1.1,1,1.7,3,2,3.4 c4.7,5-5.8,7.4-7.7,9.9c-0.5-2.5-5.8-0.1-2.5,2.9c1.5,1.4,3,3.1,2.9,5.3c0,0.7-2.7,3.9-3.4,3.6c-1.1-0.5-2.4-4.8-4.9-4.5 c-3.4,0.4,4.1,10.8,4.1,11.9c0,0.8-3.7-4.5-3.8-5c-0.7-1.7-2.2-1.3-2-3.6c0.2-1.7,0.1-2.8-0.4-4.5c-1-3.5-2.7-0.5-4-3.7 c-0.9-2.3-2.7-4.5-5.1-4.1c-2.5,0.4-5.6,4.8-7.3,6.6c-1.1,1.1-0.5,4.7-1,6.1c-1.8,5.3-8.1-12.5-7.2-12.7c-1.4,0.5-1,2.3-3,0.1 c0.2-0.2,1-0.1,0.9-0.7c-0.3-3.1-8.2-2.5-10-2.6c-1.3-0.1-10.5-4.8-10.5-4.9c-0.4,0.9,1.6,5.7,2.5,4.8c0.7-0.7,1,0.6,1.5,1 c1.4,1.1,2.2-1.1,3.2-1.4c-0.7,0.2,2.5,2.7,2.2,2.6c2.2,1.4,0.4,2.7-0.9,4.2c-2,2.4-6,4.7-8.9,5.8c-5.9,2.1-7.5-13-12.1-15.8 c-0.3-0.2-0.4,0.9-0.4,1c-0.2-0.2-1.4-2-1.7-1.8c-0.1,0.1,4.4,9.6,4.9,10.5c3,5.2,6.5,11.4,12.9,7.6c1.3,6.1-6.7,10.6-9.6,14.8 c-4.1,5.8,3.3,10.8-3.4,15.5c-2.3,1.6-2.4,2.3-1.8,4.8c0.6,2.5-2.7,2.2-2.5,4.7C-121.7,419.6-132.1,426.7-134.7,423.2 C-135.1,422.8-134,424-134.7,423.2z M-105,351.3c0.5-0.3,0.2-5.3,0.5-4.8c-1-1.8-6.2-2.2-1.8-4.1c0.8-0.3-1.7-2-2.7-1.6 c-0.2,0.1-3.9,2-2.3,2.9C-108.5,345.2-109.3,353.6-105,351.3C-104.2,350.9-106.2,351.9-105,351.3z M-111.2,414.3 c-4.8-2.7,4.3-11.2,5-13C-105.2,403.1-107.5,416.4-111.2,414.3z M-0.1,410.4c-0.4-0.5-0.7-2.1-1-2.3c0.4,0.2,2.5,3.6,2.5,3.5 C0.8,411.3,0.3,410.9-0.1,410.4z M-12,399.6c-1.4-0.4-3.6-3.6-5.1-3.2c-1.6,0.5-1.5,2.9-3.7,0.9c-1.5-1.4-1.6-3.2-3.8-4 c-0.4-0.1-6.4-2.4-4-3.7c2.4-1.3,1.9,2.8,3.4,2.3c2.9-0.9,3.2-1.4,6.5-0.1c1.3,0.5,4.8,1.6,4.6,3.6c-0.1,1.8,3.5,3.5,3.2,4.4 C-11.2,399.8-11.6,399.7-12,399.6z M-36.2,398.3c0.4-0.5,2.5-1.8,3.1-0.8C-33.2,397.5-37.6,399.6-36.2,398.3z M-42.7,397.7 c-1.1-0.4,2.1-0.8,1.6-0.1C-41.6,397.8-42.1,397.8-42.7,397.7z M-39.3,397.5c-0.8-0.9,1.7-0.2,1.9-0.1 C-38,397.8-38.7,397.9-39.3,397.5z M-46.3,397.1c-0.4-0.1-6.8-0.7-6.7-1.8c0.2-1.4,9.1,1.3,8.8,1.9 C-44.9,397.4-45.6,397.4-46.3,397.1z M-54.4,394.2c-2.2-1.2-5.9-11.2-7.9-11.2c2.1,0,5.7,3.7,6.7,5.4 C-55.6,388.5-50.8,396.2-54.4,394.2z M-40.1,394c-2.1-3.4,1.7-8.1,5.4-7c0.6,1.7-2.2,1-2.7,0.9c-3.1-0.4-1.1,3,0.5,1.8 c-1.8,1,0.9,2.5-0.3,3.4c-0.6-0.2-1.3-2.2-2-1.6C-39.8,392.4-39.5,393.4-40.1,394z M-44.6,392.1c-2.6-1.4-4.5,0.5-5-3.6 c-0.1-0.9,4-4.5,5-4.8c3.5-1.2,3-2.6,3,1.7c0,3.4,0.3,1.3-0.7,4.4C-42.5,390.7-43.1,392.9-44.6,392.1z M-32.3,388.6 c-0.8-0.8,1-2.3,1-2.4C-31.3,387.4-31.9,388.2-32.3,388.6z M-76.9,382.1c-0.4-0.7-0.4-2.3-0.1-3.1 C-75.5,377.8-75.6,384.1-76.9,382.1z M-218.7,369.9c-0.7-0.4-1.7,0.1-2.5-0.3c1.3,1.1,3.1-3,5.3-0.5 C-215.1,369.9-218.5,369.9-218.7,369.9z M-51.3,369.6c-0.9-0.9,0.8-1.6,1.4-1.3C-49.5,369.9-51.5,369.4-51.3,369.6 C-52.1,368.8-50.9,370-51.3,369.6z M-222.3,368c-0.2-0.2-2.2-1.1-2.7-1.4c-0.8-0.5-4.8-0.6-4.7-0.5c-1.2-1.5,10.6,0.1,9.1,1.7 C-220.9,368-222.2,368-222.3,368C-222.6,367.6-222.1,368.1-222.3,368z M-41.1,365.7c-0.8-0.6-0.8-2.3,0.3-2.7 C-40,362.8-40.5,366-41.1,365.7C-41.7,365.2-40.7,365.9-41.1,365.7z M-31.3,353.8c-1.4-0.7-3.4,2.1-4.5,0c-0.3-0.5,3.5-2,3.9-2.1 c3.4-1.5,0.9-2.8,1.6-4.8c0.4-1.2,2.6,3.6,2.6,4c0.2,2.6-2.5,1-3,2.8 M-31.4,345.6c-0.1-0.2-0.5-3-0.4-3.1c0.5,0.1,3.8,2.2,3.9,2.1 C-28.9,345.1-31.2,346.4-31.4,345.6z M-32.9,341.1c-0.6-0.7-3.6-6.8-4.4-6.6C-34.6,333.6-33.4,340.5-32.9,341.1 C-33.4,340.5-32.6,341.4-32.9,341.1z M-199.9,339.9c-0.8-2.3,3.5-3.8,4.9-0.8C-194.4,340.3-199.5,341-199.9,339.9z M-254,338.4 c-0.8-0.4-0.9-0.8-0.4-1.2c0.7-0.3,2.3,1.5,1.7,1.8C-253.1,339.3-254.7,337.7-254,338.4C-254.8,337.6-253.6,338.7-254,338.4z M-153.1,336.5c0.3-0.4-1.4-0.6-1.3-0.7c0.4-0.6,0.9-1.1,1.5-1.5c1.3-0.9-1.4-1.8-1.3-1.9c0.9-2.6-0.3-1.6,2-1.7 c-1.6,1.7,1.1,3.3,2.7,4.3C-148.2,335.9-153.6,336.8-153.1,336.5z M-158.5,336c-1.2-3,4.6-4.3,3.1-1.8 C-155.6,334.7-157.9,337.5-158.5,336C-159.1,334.3-158.4,336.2-158.5,336z M-184.9,327.1c-5.5-3,2.1-6.5,1-8.6 c-0.7-1.3-1.4-3.4-2.6-4.3c-0.9-0.7-5.5,0.5-5.4-1.3c0.2-3,15.5-2.7,17.7-3c6-0.7,11.4-0.8,17.3,0.2c-1-0.2-3.8,1.5-4.2,2.8 c-0.7,2.9-4.6,2-5.3,3.6c0.7,0.7,1.5,1.3,2.4,1.8c-0.6,0.3-3.2-0.9-3.4-0.6c0.2,0.6,0,0.7-0.5,1c0,0.5,1.9,0.1,2.2,0.4 c-0.7-0.9-9.8,3.2-11.1,3.5C-179.9,323.5-181.7,328.9-184.9,327.1z M-200.9,325.6c-0.6-0.6-1.2-1.3-1.9-1.8 c-0.9,0.1,3.4-1.5,3.9-1.7c0.6-0.3-3.1-3.4-4.1-3.5c-1.4-0.1-4.2,0.7-5.5-0.1c-1.7-1.2,4.2-1.7,4.2-1.7c2.2-0.4,5.2,0.5,6.8,1.9 c0.3,0.3,5,4.8,2.2,4.3c-0.4-0.1-3.1-1.5-2.3,0.5c1.2,3.1-1.7,0.2-2.2,1.2c0.3,0.4,0.7,0.8,1.1,1.2 C-199.2,326.8-201.3,325.3-200.9,325.6C-201.6,325.2-200,326.1-200.9,325.6z M-164.6,324.6c-0.5,0-1-0.2-1.3-0.6 c0.5-1.8,5.2-1.6,6.2-0.6C-160.8,324.3-163.1,325.5-164.6,324.6C-165,324.3-164.2,324.8-164.6,324.6z M-225.8,320.4 c-1-0.2-1.9-0.6-2.8-1.1c2.8-0.2,6.4-3.2,9.9-2.8c1.5,0.2,0.7,3.9-2,3.5C-222.2,319.8-225.6,320.4-225.8,320.4 C-226.8,320.2-224.7,320.5-225.8,320.4z M-113.2,318.5c-0.3-0.1-0.6-0.3-1-0.4c-1.1-1.2,6.8-5.9,8.1-3.7c0,0-7.7,1.3-4.9,4.5 C-111.7,318.8-112.4,318.7-113.2,318.5z" /> </defs> </svg></figure>';
    return (
      <div className="WorldMap">
        <div className="WorldMap-container">
          <div  dangerouslySetInnerHTML={{ __html: svgString }} />
        </div>
      </div>
    );
  }
}

export default WorldMap;
