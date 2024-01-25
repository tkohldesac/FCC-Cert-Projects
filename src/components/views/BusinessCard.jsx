import React, { } from 'react';
// FIXME:
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';

import { 
    Link, 
    Grid, 
    Box, 
    Avatar, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Typography, 
    Paper, 
    styled 
} from '@mui/material';

import TechStack from '../TechStack.jsx';
import profilepic from '../helpers/images/profilepic.png'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function BusinessCard() {


    return (
        <Box sx={{flexGrow:1}} margin="auto">
        <Grid container bg={"lightgray"} m="auto" spacing={2}>
            <Item item xs={4}>
                <Typography variant="h4">Topher Kohlstedt</Typography>
                    <Link href="http://www.kohldesac.dev">
                        <Avatar src={profilepic} borderRadius='50%' alt="Handsome Devil" sx={{width: 240, height: 240}}/>
                    </Link>
            </Item>
            <Item item>
                <Link style={{ textDecoration: 'none', color:'black' }} fontSize='2xl' href="mailto:hello@kohldesac.com">
                        <EmailIcon fontSize='xl'/> hello@kohldesac.com
            </Link>
            </Item>
            </Grid>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Tech Stack
                </AccordionSummary>

                <AccordionDetails>

                <TechStack />

                </AccordionDetails>
            </Accordion>
       
        </Box>
        );
}

