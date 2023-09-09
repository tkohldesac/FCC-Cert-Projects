import React from 'react';
import { Text, Divider, Stack, Link, Card, Flex, Tooltip } from '@chakra-ui/react'

export default function Projects() {
    return (
        <>
            <Flex  >
                <Stack margin={'1rem'}>
                    <Link fontSize='xl' style={{ margin: '1rem', textAlign: 'center', }} borderRadius={'xl'} href="https://ouata.kohldesac.com" fontWeight="bold">
                        Once Upon A Time Ago

                    </Link>
                    <Card padding={'1rem'} fontSize='lg' >Once Upon A Time Ago is the capstone project of my mentorship. It is a Single Page Application utilizing Webpack and React without using 'create-react-app'. ExpressJS and NodeJS make up the backend and data is stored in a PostgreSQL database.  </Card>

                    <Divider paddingTop={'20%'} marginBottom={'10%'} />

                    <Tooltip label="Under Construction">
                        <Text fontSize='xl' style={{ margin: '1rem', textAlign: 'center', }} borderRadius={'xl'} as="b">
                            FloraFacts
                        </Text>
                    </Tooltip>

                    <Card padding={'1rem'} fontSize='lg' >FloraFacts is a React Native app utilizing Expo and a 3rd party API to identify plants and their edibility. Photos are submitted to the API either via your photo gallery or by using your mobile device's camera.</Card>
                </Stack>
            </Flex >
        </>
    )
}
