import React from 'react';
import { Text, Divider, Stack, Card, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import { AiFillHeart } from "react-icons/ai";

export default function Etcetera() {
    return (
        <>

            <Stack margin={'5%'}>

                <Card padding={'1rem'} fontSize='lg'>
                    <Text fontSize='xl' style={{ margin: '1rem', textAlign: 'center', }} borderRadius={'xl'} as="b">Music</Text>
                    <Text fontSize='lg' as='b'>Instruments</Text>
                    <Text>Clarinet</Text>
                    <Text>Bass Clarinet</Text>
                    <Text>Alto Saxophone</Text>
                    <Text>Tenor Saxophone</Text>
                    <Text>Guitar</Text>

                </Card>

                <Divider paddingTop={'20%'} marginBottom={'20%'} />
                <Card padding={'1rem'} fontSize='lg' >
                    <Text fontSize='xl' style={{ margin: '1rem', textAlign: 'center', }} borderRadius={'xl'} as="b">Games</Text>
                    <List alignContent={'center'}>
                        <ListItem>Factorio</ListItem>
                        <ListItem>Final Fantasy XIV</ListItem>
                        <ListItem>Dwarf Fortress</ListItem>
                        <ListItem>Baldur's Gate 3</ListItem>
                        <ListItem>Armored Core</ListItem>
                        <ListItem>Nintendo</ListItem>
                        <ListItem>Retro Gaming</ListItem>
                        <ListItem>
                            Banjo-Kazooie
                            <ListIcon as={AiFillHeart} style={{ marginLeft: '.5rem', verticalAlign: 'middle' }} />
                        </ListItem>
                    </List>
                </Card>
            </Stack>

        </>
    )
}
