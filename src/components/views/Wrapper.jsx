import React, { } from 'react';
import profilepic from '../helpers/images/profilepic.jpg'
import { Image, useDisclosure, Grid, GridItem, Heading, Flex, Link, Stack } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react'
import AboutMe from '../sections/AboutMe';
import TechStack from '../sections/TechStack';
import Projects from '../sections/Projects';
import Etcetera from '../sections/Etcetera';

import { EmailIcon } from '@chakra-ui/icons'

export default function Wrapper() {

    const { isOpen: topIsOpen, onOpen: topOnOpen, onClose: topOnClose } = useDisclosure();
    const { isOpen: bottomIsOpen, onOpen: bottomOnOpen, onClose: bottomOnClose } = useDisclosure();
    const { isOpen: leftIsOpen, onOpen: leftOnOpen, onClose: leftOnClose } = useDisclosure();
    const { isOpen: rightIsOpen, onOpen: rightOnOpen, onClose: rightOnClose } = useDisclosure();

    return (
        <>
            <Grid
                h="100vh"
                w="100vw"
                templateRows="1fr 1fr 1fr"
                templateColumns="1fr 1fr 1fr"
                gap={2}
                bg='blackAlpha.500'
            >
                {/* Grid Items */}
                <GridItem ></GridItem>
                <GridItem
                    _hover={{ background: "#080" }}
                    _active={{ background: "#070" }}
                    onClick={topOnOpen}
                    bg="#050"
                    borderRadius='xl'>

                    <Flex
                        h="100%"
                        align="center"
                        justify="center">
                        <Heading>
                            ABOUT ME
                        </Heading>
                    </Flex>
                </GridItem>
                <GridItem ></GridItem>
                <GridItem
                    _hover={{ background: "#080" }}
                    _active={{ background: "#070" }}
                    onClick={rightOnOpen}
                    bg="#050"
                    borderRadius='xl'>

                    <Flex
                        h="100%"
                        align="center"
                        justify="center">
                        <Heading>
                            ETCETERA
                        </Heading>
                    </Flex>
                </GridItem>
                <GridItem>

                    <Stack align="center">
                        <Image src={profilepic} borderRadius='full' boxSize='300px' mr={2} verticalAlign={'middle'} />
                        <Link _hover={{ textDecoration: 'none' }} fontSize='3xl' href="mailto:hello@kohldesac.com"><EmailIcon /> hello@kohldesac.com</Link>
                    </Stack>
                </GridItem>


                <GridItem
                    _hover={{ background: "#080" }}
                    _active={{ background: "#070" }}
                    onClick={leftOnOpen}
                    bg="#050"
                    borderRadius='xl'>
                    <Flex
                        h="100%"
                        align="center"
                        justify="center">
                        <Heading>
                            PROJECTS
                        </Heading>
                    </Flex>
                </GridItem>
                <GridItem ></GridItem>
                <GridItem
                    _hover={{ background: "#080" }}
                    _active={{ background: "#070" }}
                    onClick={bottomOnOpen}
                    bg="#050"
                    borderRadius='xl'>
                    <Flex
                        h="100%"
                        align="center"
                        justify="center">
                        <Heading>
                            TECH STACK
                        </Heading>
                    </Flex>
                </GridItem>
                <GridItem ></GridItem>
            </Grid>

            {/* Tech Stack Drawer */}
            <Drawer placement="top" isOpen={bottomIsOpen} onClose={bottomOnClose}>
                <DrawerOverlay>
                    <DrawerContent >
                        <DrawerHeader textAlign={'center'}>Tech Stack</DrawerHeader>
                        <TechStack />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer >

            {/* About Me Drawer */}
            <Drawer Drawer placement="bottom" isOpen={topIsOpen} onClose={topOnClose} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader textAlign={'center'}>About Me</DrawerHeader>
                        <DrawerBody>
                            <AboutMe />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer >

            {/* Projects Drawer */}
            <Drawer Drawer placement="left" isOpen={leftIsOpen} onClose={leftOnClose} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader textAlign={'center'}>Projects</DrawerHeader>
                        <Projects />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer >

            {/* Etcetera */}
            <Drawer Drawer placement="right" isOpen={rightIsOpen} onClose={rightOnClose} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader textAlign={'center'}>Etcetera</DrawerHeader>
                        <Etcetera />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer >


        </>



    );
}

