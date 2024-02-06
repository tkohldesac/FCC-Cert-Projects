import React from "react";
import {Stack, Grid, Typography, Tooltip, Link, Container, Paper} from '@mui/material';



export default function TechStack() {

    
    const ouataDescription = (
        <div>
            <p>Once Upon A Time Ago is the capstone project of my mentorship. It is a Single Page Application utilizing Webpack and React without using 'create-react-app'. ExpressJS and NodeJS make up the backend and data is stored in a PostgreSQL database.</p>
        </div>
    )

    const floraFactsDescription = (
        <div>
            <p>FloraFacts is a React Native app utilizing Expo and a 3rd party API to identify plants and their edibility. Photos are submitted to the API either via your photo gallery or by using your mobile device's camera.</p>
        </div>
    )
        const aetherflowDescription = (
        <div>
            <p>This is a JavaScript framework I developed from scratch to help me grasp fundamental concepts and the Virtual DOM. </p>
        </div>
    )
    


    return (
        <Container xs={12}>
           <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} margin={'auto'}>
                <Grid item xs={4}>
                <Link href="ouata.kohldesac.com" style={{ textDecoration: 'none', color: 'black' }}>
                    <Tooltip title={ouataDescription}>
                    <Container>
                        <Typography variant="h6">Once Upon A Time Ago</Typography>
                        <img src="https://placehold.co/200x150" alt="Once Upon A Time Ago" />
                    </Container>
                    </Tooltip>
                </Link>
                </Grid>
                <Grid item xs={4}>
                <Link href="https://github.com/tkohldesac/florafacts" style={{ textDecoration: 'none', color: 'black' }}>
                    <Tooltip title={floraFactsDescription}>
                    <Container>
                        <Typography variant="h6">FloraFacts</Typography>
                        <img src="https://placehold.co/200x150" alt="FloraFacts" />
                    </Container>
                    </Tooltip>
                </Link>
                </Grid>
                <Grid item xs={4}>
                <Link href="https://github.com/tkohldesac/aetherFlow" style={{ textDecoration: 'none', color: 'black' }}>
                    <Tooltip title={aetherflowDescription}>
                    <Container>
                        <Typography variant="h6">Aetherflow</Typography>
                        <img src="https://placehold.co/200x150" alt="Aetherflow" />
                    </Container>
                    </Tooltip>
                </Link>
                </Grid>
            </Grid>
        </Container>
     );
}