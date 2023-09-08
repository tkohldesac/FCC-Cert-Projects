import React from 'react';
import { Center, Text, Stack } from '@chakra-ui/react'
import { } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoGit, } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb"

export default function TechStack() {
    return (
        <>
            <Center>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoHtml5 size="5rem" />
                    <Text >HTML5</Text>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoCss3 size="5rem" />
                    <Text alignItems='center'>CSS3</Text>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoJavascript size="5rem" />
                    <Text alignItems='center'>JavaScript</Text>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoReact size="5rem" />
                    <Text alignItems='center'>React</Text>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <TbBrandReactNative size="5rem" />
                    <Text alignItems='center'>React Native</Text>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoPostgresql size="5rem" />
                    <Text alignItems='center'>PostgreSQL</Text>
                </Stack>
                <Stack alignItems='center' padding="1rem">
                    <BiLogoGit size="5rem" />
                    <Text alignItems='center' >Git</Text>
                </Stack>
            </Center>
        </>
    )
}
