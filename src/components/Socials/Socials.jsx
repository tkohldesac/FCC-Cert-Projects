import React from "react";
import { Container, Typography, Link, Avatar, List, ListItem, Grid,  } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';

const profilePic = "https://i.imgur.com/cTZWzpU.png"

export default function Socials() {


    return (
            <Container>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={12} md={5} m="auto" paddingTop='1rem' paddingBottom='1rem' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Typography  variant="h4">Topher Kohlstedt</Typography>  
                        <Avatar src={profilePic} borderRadius='50%' alt="A Handsome Devil" sx={{width: 240, height: 240}}/>

                    </Grid>
                    <Grid xs={12} sm={12} md={5} padding='3rem'>
                        <List display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="mailto:hello@kohldesac.com" target="_blank" display={'flex'} alignItems={'center'}>
                                        <EmailIcon fontSize='xl'/><Typography>hello@kohldesac.com</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://github.com/tkohldesac" target="_blank" display={'flex'} alignItems={'center'} >
                                        <GitHubIcon fontSize='xl'/><Typography>GitHub</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://www.linkedin.com/in/topher-kohlstedt-73583528b/" target="_blank" display={'flex'} alignItems={'center'} >
                                        <LinkedInIcon fontSize='xl'/> <Typography>LinkedIn</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="http://www.kohldesac.dev" style={{ textDecoration: 'none', color:'black' }} target="_blank" display={'flex'} alignItems={'center'} >
                                        <BookIcon fontSize='xl'/><Typography>Blog</Typography>
                                </Link>
                            </ListItem>                            
                        </List>
                    </Grid>
                </Grid>
            </Container>
     );
}