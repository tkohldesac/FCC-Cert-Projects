import React from "react";
import { Container, Typography, Link, Avatar, List, ListItem, Grid,  } from '@mui/material';

import profilepic from './helpers/images/profilepic.png'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';


export default function Socials() {


    return (
            <Container>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={12} md={5} m="auto" paddingTop='1rem' paddingBottom='1rem' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Typography  variant="h4">Topher Kohlstedt</Typography>  
                        <Avatar src={profilepic} borderRadius='50%' alt="A Handsome Devil" sx={{width: 240, height: 240}}/>
                    </Grid>
                    <Grid xs={12} sm={12} md={5} padding='3rem'>
                        <List display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="mailto:hello@kohldesac.com" target="_blank" display={'flex'} alignItems={'center'}>
                                        <EmailIcon fontSize='xl'/><Typography>hello@kohldesac.com</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://github.com/tkohldesac" target="_blank" target="_blank" display={'flex'} alignItems={'center'} >
                                        <GitHubIcon fontSize='xl'/><Typography>GitHub</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://www.linkedin.com/in/topher-kohlstedt-73583528b/" target="_blank" target="_blank" display={'flex'} alignItems={'center'} >
                                        <LinkedInIcon fontSize='xl'/> <Typography>LinkedIn</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="http://www.kohldesac.dev" style={{ textDecoration: 'none', color:'black' }} target="_blank" target="_blank" display={'flex'} alignItems={'center'} >
                                        <BookIcon fontSize='xl'/><Typography>Blog</Typography>
                                </Link>
                            </ListItem>                            
                            <ListItem>
                                <Link href="https://app.codesignal.com/profile/tkohldesac" style={{ textDecoration: 'none', color:'black' }} target="_blank" target="_blank" display={'flex'} alignItems={'center'} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M24 1.212L13.012 2.787L12 5.62l-1.01-2.833L0 1.212L3.672 11.45l4.512.646l3.815 10.691l3.816-10.691l4.512-.646zm-3.625 4.406l-4.52.648l-.73 2.044l4.517-.647l-.734 2.047l-4.514.647L12 17.064l-2.393-6.707l-4.514-.647l-.735-2.047l4.518.647l-.73-2.044l-4.52-.648l-.735-2.047l6.676.956L12 11.345l2.434-6.818l6.676-.956Z"/></svg><Typography>CodeSignal Arcade</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
     );
}