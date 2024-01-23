import React, { } from 'react';
import profilepic from '../helpers/images/profilepic.png'
import { Container, Link, Image, Text, Flex, Center } from '@chakra-ui/react'

import { EmailIcon } from '@chakra-ui/icons'

export default function BusinessCard() {


    return (
        <Flex paddingTop={"50px"}>
                <Container maxW="md" bg={"red"}>
                    <Text fontSize="3xl" centered>Topher Kohlstedt</Text>
                    <Link href="http://www.kohldesac.dev">
                        <Image src={profilepic} borderRadius='full' boxSize='300px' mr={2} verticalAlign={'middle'} />
                    </Link>
                    <Link _hover={{ textDecoration: 'none' }} fontSize='2xl' href="mailto:hello@kohldesac.com"><EmailIcon fontSize='xl'/> hello@kohldesac.com</Link>
                </Container>
        </Flex>
    );
}

