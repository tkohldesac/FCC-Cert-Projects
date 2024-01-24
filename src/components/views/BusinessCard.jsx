import React, { } from 'react';
import profilepic from '../helpers/images/profilepic.png'
import { Container, Link, Image, Flex, } from '@chakra-ui/react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { EmailIcon } from '@chakra-ui/icons'

import TechStack from '../TechStack.jsx';

export default function BusinessCard() {


    return (
        <Flex paddingTop={"50px"}>
                <Container maxW="md" bg={"lightgray"}>
                    <Typography variant="h4">Topher Kohlstedt</Typography>
                        <Link href="http://www.kohldesac.dev">
                            <Image src={profilepic} borderRadius='full' boxSize='300px' mr={2} verticalAlign={'middle'} />
                        </Link>
                    <Link 
                        style={{ textDecoration: 'none', color:'black' }} 
                        fontSize='2xl' 
                        href="mailto:hello@kohldesac.com">
                            <EmailIcon fontSize='xl'/> hello@kohldesac.com
                            
                    </Link>
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
                </Container>
        </Flex>
        );
}

