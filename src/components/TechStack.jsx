import React, { } from 'react';
import { Grid, Typography, Container } from '@mui/material';

import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoGit, BiLogoTypescript  } from "react-icons/bi";
import { TbBrandReactNative, TbBrandNodejs } from "react-icons/tb";

export default function TechStack() {


    return (
     
            <Grid container spacing={1} >
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoHtml5 size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoCss3 size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoJavascript size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoReact size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <TbBrandReactNative size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoPostgresql size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoGit size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>                
                    <Grid item xs={6} sm={4} md={1.3}>
                        <TbBrandNodejs size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1.3}>
                        <BiLogoTypescript  size="5rem" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Grid>
                </Grid>

     );
}