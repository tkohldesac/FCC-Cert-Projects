import React from "react";
import { Grid, Typography, List, ListItem } from '@mui/material';

export default function TechStack() {


    return (
        <>
        <Grid container>
        <Grid item>
                <Typography variant="h6">Skills:</Typography>
                <List>
                    <ListItem><Typography>Managed Service Providers</Typography></ListItem>
                    <ListItem><Typography>IT Administration</Typography></ListItem>
                    <ListItem><Typography>WordPress</Typography></ListItem>
                    <ListItem><Typography>Google</Typography></ListItem>
                    <ListItem><Typography>Azure</Typography></ListItem>
                    <ListItem><Typography>Adobe Creative Suite</Typography></ListItem>
                </List>
            </Grid>
            <Grid item>
                <Typography variant="h6">Recent Roles:</Typography>
                <List>
                    <ListItem><Typography>Managed Service Providers</Typography></ListItem>
                    <ListItem><Typography>IT Administration</Typography></ListItem>
                    <ListItem><Typography>WordPress</Typography></ListItem>
                    <ListItem><Typography>Google</Typography></ListItem>
                    <ListItem><Typography>Azure</Typography></ListItem>
                    <ListItem><Typography>Adobe Creative Suite</Typography></ListItem>
                </List>
            </Grid>
            
        </Grid>

        </>

     );
}