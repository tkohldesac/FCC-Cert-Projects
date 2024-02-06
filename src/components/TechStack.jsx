import React from 'react';
import { Grid, Typography, Container } from '@mui/material';

import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoGit, BiLogoTypescript  } from "react-icons/bi";
import { TbBrandReactNative, TbBrandNodejs } from "react-icons/tb";

export default function TechStack() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1}>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoHtml5 size="5rem" />
                    <Typography variant="subtitle1" align="center">HTML5</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoCss3 size="5rem" />
                    <Typography variant="subtitle1" align="center">CSS3</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoJavascript size="5rem" />
                    <Typography variant="subtitle1" align="center">JavaScript</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoReact size="5rem" />
                    <Typography variant="subtitle1" align="center">React</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <TbBrandReactNative size="5rem" />
                    <Typography variant="subtitle1" align="center">React Native</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoPostgresql size="5rem" />
                    <Typography variant="subtitle1" align="center">PostgreSQL</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoGit size="5rem" />
                    <Typography variant="subtitle1" align="center">Git</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <TbBrandNodejs size="5rem" />
                    <Typography variant="subtitle1" align="center">NodeJS</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={1.3} container direction="column" alignItems="center" justify="center">
                    <BiLogoTypescript size="5rem" />
                    <Typography variant="subtitle1" align="center">TypeScript</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
