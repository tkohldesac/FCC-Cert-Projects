import React, { } from 'react';
import { Stack, Typography } from '@mui/material';

import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoGit, BiLogoTypescript  } from "react-icons/bi";
import { TbBrandReactNative, TbBrandNodejs } from "react-icons/tb";

export default function TechStack() {


    return (
        <>
        <Stack direction="row">
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
            <Stack alignItems='center' padding="1rem">
                <TbBrandNodejs size="5rem" />
                <Typography alignItems='center' >NodeJS</Typography>
            </Stack>
            <Stack alignItems='center' padding="1rem">
                <BiLogoTypescript  size="5rem" />
                <Typography alignItems='center' >TypeScript</Typography>
            </Stack>
        </Stack>

        </>

     );
}