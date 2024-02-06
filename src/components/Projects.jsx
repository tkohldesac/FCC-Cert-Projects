import React from "react";
import {Stack, Grid, Typography, Tooltip, Link, Container, Paper} from '@mui/material';

import ouataThumbnail from "./helpers/images/ouata.png"
import aetherThumbnail from "./helpers/images/aether.jpg"
import floraThumbnail from "./helpers/images/flora.jpg"

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
        <Container maxWidth="md">
  <Grid container spacing={2} justifyContent="center" xs={1} md={12}>
    <Grid item xs={1} sm={12} md={4}>
      <Link href="https://ouata.kohldesac.com" style={{ textDecoration: 'none', color: 'black' }}>
        <Tooltip title={ouataDescription}>
          <Container>
            <Typography variant="h6">Once Upon A Time Ago</Typography>
            <img src={ouataThumbnail} width="225" height="138" alt="Once Upon A Time Ago" />
          </Container>
        </Tooltip>
      </Link>
    </Grid>
    <Grid item xs={1} sm={2} md={4}>
      <Link href="https://github.com/tkohldesac/florafacts" style={{ textDecoration: 'none', color: 'black' }}>
        <Tooltip title={floraFactsDescription}>
          <Container>
            <Typography variant="h6">FloraFacts</Typography>
            <img src={floraThumbnail} width="225" height="138" alt="FloraFacts" />
          </Container>
        </Tooltip>
      </Link>
    </Grid>
    <Grid item xs={1} sm={2} md={4}>
      <Link href="https://github.com/tkohldesac/aetherFlow" style={{ textDecoration: 'none', color: 'black' }}>
        <Tooltip title={aetherflowDescription}>
          <Container>
            <Typography variant="h6">Aetherflow</Typography>
            <img src={aetherThumbnail}width="225" height="138" alt="Aetherflow" />
          </Container>
        </Tooltip>
      </Link>
    </Grid>
  </Grid>
</Container>

     );
}