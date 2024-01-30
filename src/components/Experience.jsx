import React from "react";
import { Grid, Typography, List, ListItem } from '@mui/material';

export default function TechStack() {


    return (
        <>
        <Grid container justifyContent={'center'}>
            <Grid item>
                <Typography variant="h6">Skills:</Typography>
                <List>
                    <ListItem><Typography variant="p">Managed Service Providers</Typography></ListItem>
                    <ListItem><Typography variant="p">IT Administration</Typography></ListItem>
                    <ListItem><Typography variant="p">WordPress</Typography></ListItem>
                    <ListItem><Typography variant="p">Google</Typography></ListItem>
                    <ListItem><Typography variant="p">Azure</Typography></ListItem>
                    <ListItem><Typography variant="p">Adobe Creative Suite</Typography></ListItem>
                </List>
            </Grid>
            <Grid item>
                <Typography variant="h6">Recent Roles:</Typography>
                <List>
                    <ListItem><Typography variant="p">Managed Service Providers</Typography></ListItem>
                    <ListItem><Typography variant="p">IT Administration</Typography></ListItem>
                    <ListItem><Typography variant="p">WordPress</Typography></ListItem>
                    <ListItem><Typography variant="p">Google</Typography></ListItem>
                    <ListItem><Typography variant="p">Azure</Typography></ListItem>
                    <ListItem><Typography variant="p">Adobe Creative Suite</Typography></ListItem>
                </List>
            </Grid>
            
        </Grid>

        </>

     );
}