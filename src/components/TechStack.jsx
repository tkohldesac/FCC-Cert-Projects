import React, { } from 'react';
import { Stack, Typography } from '@mui/material';
import htmlSvgIcon from './helpers/images/svgs/html.svg';
import cssSvgIcon from './helpers/images/svgs/css.svg';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, TbBrandReactNative, BiLogoPostgresql, BiLogoGit } from 'react-icons';


export default function TechStack() {


    return (
        <>
        {/* <img src={htmlSvgIcon} alt="html5" width="150" height="75"/> HTML5
        <img src={cssSvgIcon} alt="html5" width="150" height="75"/> CSS3
        <img src={htmlSvgIcon} width="150" height="75"/> JavaScript
        <img src={htmlSvgIcon} width="150" height="75"/> React
        <img src={htmlSvgIcon} width="150" height="75"/> React Native
        <img src={htmlSvgIcon} width="150" height="75"/> PostgreSQL
        <img src={htmlSvgIcon} width="150" height="75"/> Webpack
        <img src={htmlSvgIcon} width="150" height="75"/> Git
        <img src={htmlSvgIcon} width="150" height="75"/> NodeJS
        <img src={htmlSvgIcon} width="150" height="75"/> TypeScript */}

        <Stack alignItems='center' padding="1rem">
                    <BiLogoHtml5 size="5rem" />
                    <Typography >HTML5</Typography>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoCss3 size="5rem" />
                    <Typography alignItems='center'>CSS3</Typography>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoJavascript size="5rem" />
                    <Typography alignItems='center'>JavaScript</Typography>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoReact size="5rem" />
                    <Typography alignItems='center'>React</Typography>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <TbBrandReactNative size="5rem" />
                    <Typography alignItems='center'>React Native</Typography>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoPostgresql size="5rem" />
                    <Typography alignItems='center'>PostgreSQL</Typography>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoGit size="5rem" />
                    <Typography alignItems='center' >Git</Typography>
                </Stack>
        </>

     );
}