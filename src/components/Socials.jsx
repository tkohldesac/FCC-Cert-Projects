import React from "react";
import { Container, Typography, Box, Link, Avatar,  } from '@mui/material';
import profilepic from './helpers/images/profilepic.png'
import EmailIcon from '@mui/icons-material/Email';

export default function Socials() {


    return (
        <>
            <Container style={{paddingBottom:'1rem'}}>
                <Typography variant="h5">Topher Kohlstedt</Typography>
                    <Link href="http://www.kohldesac.dev">
                        <Avatar src={profilepic} borderRadius='50%' alt="Handsome Devil" sx={{width: 240, height: 240}}/>
                    </Link>


                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="mailto:hello@kohldesac.com">
                        <EmailIcon fontSize='xl'/> hello@kohldesac.com
                </Link>
            </Container >
        </>

     );
}