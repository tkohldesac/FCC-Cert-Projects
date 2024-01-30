import React from "react";
import { Container, Typography, Link, Avatar,  } from '@mui/material';
import profilepic from './helpers/images/profilepic.png'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';

export default function Socials() {


    return (
        <>
            <Container style={{paddingBottom:'1rem'}}>
                <Typography variant="h5">Topher Kohlstedt</Typography>
               
                    <Avatar src={profilepic} borderRadius='50%' alt="Handsome Devil" sx={{width: 240, height: 240}}/>
             
                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="mailto:hello@kohldesac.com">
                        <EmailIcon fontSize='xl'/> hello@kohldesac.com
                </Link>
                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://github.com/tkohldesac">
                        <GitHubIcon fontSize='xl'/> GitHub
                </Link>
                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="https://www.linkedin.com/in/topher-kohlstedt-73583528b/">
                        <LinkedInIcon fontSize='xl'/> LinkedIn
                </Link>
                <Link href="http://www.kohldesac.dev" style={{ textDecoration: 'none', color:'black' }} >
                        <BookIcon fontSize='xl'/> Blog
                </Link>

            </Container >
        </>

     );
}