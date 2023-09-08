import React from 'react';
import {
    Text, Divider, Stack, Grid, Card, Center, GridItem, ListItem, UnorderedList,
} from '@chakra-ui/react'

export default function AboutMe() {
    return (
        <>
            <Center>
                <Stack direction='row' alignContent={'center'}>
                    <Card padding={'1rem'} fontSize='md' >
                        <Text fontSize='xl' as='b' textAlign={'center'}>Location</Text>
                        <Text fontSize={'md'} >Pacific Northwest</Text>
                    </Card>
                    <Divider orientation='vertical' />
                    <Card padding={'1rem'} fontSize='md' >
                        <Text fontSize='xl' as='b' textAlign={'center'}>Experience</Text>
                        <Text fontSize={'md'}>Kohldesac.com -
                            <br />Freelance Production Artist & Web Developer</Text>

                    </Card>
                    <Card padding={'1rem'} fontSize='md' >
                        <Text fontSize='xl' as='b' textAlign={'center'}>Professional Skills</Text>

                        <Grid templateColumns="repeat(2, 1fr)">
                            <GridItem>
                                <UnorderedList fontSize={'md'}>

                                    <ListItem>Office 365</ListItem>
                                    <ListItem>Powershell</ListItem>
                                    <ListItem>Adobe Creative Suite</ListItem>
                                </UnorderedList>
                            </GridItem>
                            <GridItem paddingLeft={'1rem'}>
                                <UnorderedList>
                                    <ListItem>Linux/Ubuntu</ListItem>
                                    <ListItem>WordPress</ListItem>
                                    <ListItem>Google</ListItem>

                                </UnorderedList>
                            </GridItem>
                        </Grid>
                    </Card>
                </Stack>
            </Center >
        </>
    )
}
