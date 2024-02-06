import React from "react";
import { Grid, Typography, List, ListItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TechStack() {


    return (
        <>
        <Grid container justifyContent={'center'} spacing={10}>
            <Grid item>
                <Typography variant="h5">Hobbies:</Typography>
                <List>
                    <ListItem><Typography>Linux Server</Typography></ListItem>
                    <ListItem><Typography>Linux Desktop</Typography></ListItem>
                    <ListItem><Typography>Docker</Typography></ListItem>
                    <ListItem><Typography>Raspberry Pi</Typography></ListItem>
                    <ListItem><Typography>Home Gardening</Typography></ListItem>
                    <ListItem><Typography>Chicken Farmer</Typography></ListItem>
                    <ListItem><Typography>DIY Craftsman</Typography></ListItem>
                </List>
            </Grid>
            <Grid item>
                <Typography variant="h5">Music:</Typography>
                <List>
                    <ListItem><Typography>Clarinet</Typography></ListItem>
                    <ListItem><Typography>Bass Clarinet</Typography></ListItem>
                    <ListItem><Typography>Alto and Tenor Saxophones</Typography></ListItem>
                    <ListItem><Typography>Guitar</Typography></ListItem>
                </List>
            </Grid>
            <Grid item>
                <Typography variant="h5">Gaming:</Typography>
                <List>
                    <ListItem><Typography>Banjo-Kazooie/Tooie <FavoriteIcon sx={{fontSize: 16 }} /></Typography></ListItem>
                    <ListItem><Typography>Halo</Typography></ListItem>
                    <ListItem><Typography>Super Smash Bros.</Typography></ListItem>
                    <ListItem><Typography>Factorio</Typography></ListItem>
                    <ListItem><Typography>Final Fantasy XIV</Typography></ListItem>
                    <ListItem><Typography>Dwarf Fortress</Typography></ListItem>
                    <ListItem><Typography>Baldur's Gate 3</Typography></ListItem>
                    <ListItem><Typography>Nintendo</Typography></ListItem>
                </List>
            </Grid>
        </Grid>

        </>

     );
}