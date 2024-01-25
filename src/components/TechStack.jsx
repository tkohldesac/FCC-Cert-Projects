import React, { } from 'react';
import htmlSvgIcon from './helpers/images/svgs/html.svg';
import cssSvgIcon from './helpers/images/svgs/css.svg';


export default function TechStack() {


    return (
        <>
        <img src={htmlSvgIcon} alt="html5" width="150" height="75"/> HTML5
        <img src={cssSvgIcon} alt="html5" width="150" height="75"/> CSS3
        <img src={htmlSvgIcon} width="150" height="75"/> JavaScript
        <img src={htmlSvgIcon} width="150" height="75"/> React
        <img src={htmlSvgIcon} width="150" height="75"/> React Native
        <img src={htmlSvgIcon} width="150" height="75"/> PostgreSQL
        <img src={htmlSvgIcon} width="150" height="75"/> Webpack
        <img src={htmlSvgIcon} width="150" height="75"/> Git
        <img src={htmlSvgIcon} width="150" height="75"/> NodeJS
        <img src={htmlSvgIcon} width="150" height="75"/> TypeScript
        </>

     );
}