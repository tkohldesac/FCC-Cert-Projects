import React from "react";
import { styled } from '@mui/material/styles';
import { Container, Typography, Link, Avatar, List, ListItem, Grid, Paper } from '@mui/material';

import profilepic from './helpers/images/profilepic.png'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';


export default function Socials() {


    return (
            <Container>
                <Grid container  columns={12}>
                    <Grid xs={3} m="auto" paddingTop='1rem' paddingBottom='1rem'>
                        <Typography variant="h4">Topher Kohlstedt</Typography>  
                    
                        <Avatar src={profilepic} borderRadius='50%' alt="Handsome Devil" sx={{width: 240, height: 240}}/>
                        </Grid>
                    <Grid xs={5} padding='3rem'>
                        <List>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="mailto:hello@kohldesac.com">
                                        <EmailIcon fontSize='xl'/> hello@kohldesac.com
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://github.com/tkohldesac">
                                        <GitHubIcon fontSize='xl'/> GitHub
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://www.linkedin.com/in/topher-kohlstedt-73583528b/">
                                        <LinkedInIcon fontSize='xl'/> LinkedIn
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="http://www.kohldesac.dev" style={{ textDecoration: 'none', color:'black' }} >
                                        <BookIcon fontSize='xl'/> Blog
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
     );
}