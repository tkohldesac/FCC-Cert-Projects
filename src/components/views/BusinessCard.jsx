import React, { } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    Container, 
    Typography, 
    Paper, 
    styled 
} from '@mui/material';

import TechStack from '../TechStack.jsx';
import Experience from '../Experience.jsx'
import AboutMe from '../AboutMe.jsx';
import Projects from '../Projects.jsx'
import Socials from '../Socials.jsx'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function BusinessCard() {

    return (
        <Paper style={{ maxWidth: '60vw', margin: 'auto', backgroundColor: '#888'}}>
                <TechStack />
            <Socials/>
{/* Projects Accordion */}
            <Accordion>
                <AccordionSummary
                   expandIcon={<ArrowDropDownIcon/>}

                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{backgroundColor: '#333', color:'white',}}
                >
                    <Typography variant="h5" m="auto">Projects</Typography>
                </AccordionSummary>

                <AccordionDetails style={{backgroundColor: '#888'}}>

                <Projects/>

                </AccordionDetails>
            </Accordion>  
{/* Experience Accordion */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{backgroundColor: '#333', color:'white'}}
                >
                    <Typography variant="h5" m="auto">Experience</Typography>
                </AccordionSummary>

                <AccordionDetails style={{backgroundColor: '#888'}}>

                <Experience/>

                </AccordionDetails>
            </Accordion>  

{/* About Me Accordion */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{backgroundColor: '#333', color:'white'}}
                >
                    <Typography variant="h5" m="auto">About Me</Typography>
                </AccordionSummary>

                <AccordionDetails style={{backgroundColor: '#888'}}>

                <AboutMe />

                </AccordionDetails>
            </Accordion>


      
        </Paper>
        );
}

