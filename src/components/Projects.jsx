import React from "react";
import {Stack, Grid, Typography, Tooltip, Link, Container} from '@mui/material';



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
        <>
            <Container style={{backgroundColor: '#888'}}>
                <Stack direction="row" justifyContent={'center'}>
                    <Link href="#" style={{textDecoration:'none', color:'black'}}>
                        <Grid container>
                            <Tooltip title={ouataDescription}>
                                <Grid item>
                                    <Typography>IMAGE</Typography>
                                    <Typography variant="h6">Once Upon A Time Ago</Typography>
                                </Grid>
                            </Tooltip>
                        </Grid>
                    </Link>
                    <Link href="#" style={{textDecoration:'none', color:'black'}}>
                        <Grid container>
                            <Tooltip title={floraFactsDescription}>                    
                                <Grid item>
                                    <Typography>IMAGE</Typography>
                                    <Typography variant="h6">FloraFacts</Typography>
                                </Grid>
                            </Tooltip>
                        </Grid>
                    </Link>
                    <Link href="#" style={{textDecoration:'none', color:'black'}}>
                        <Grid container>
                            <Tooltip title={aetherflowDescription}>
                                <Grid item>
                                    <Typography>IMAGE</Typography>
                                    <Typography variant="h6">Aetherflow</Typography>
                                </Grid>
                            </Tooltip>
                        </Grid>
                    </Link>
                </Stack>
            </Container>
        </>

     );
}