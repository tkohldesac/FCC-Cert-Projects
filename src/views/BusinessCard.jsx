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

import TechStack from '../components/TechStack/TechStack.jsx';
import Experience from '../components/Experience/Experience.jsx'
import AboutMe from '../components/AboutMe/AboutMe.jsx';
import Projects from '../components/Projects/Projects.jsx'
import Socials from '../components/Socials/Socials.jsx'

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

