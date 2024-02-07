import React from "react";
import { Grid, Typography, List, ListItem, Modal, Button, Box, Link } from '@mui/material';

export default function TechStack() {

    const [openSE, setOpenSE] = React.useState(false);
    const [openNOT, setOpenNOT] = React.useState(false);
    const [openIT, setOpenIT] = React.useState(false);
    const handleSEOpen = () => setOpenSE(true);
    const handleSEClose = () => setOpenSE(false);
    const handleNOTOpen = () => setOpenNOT(true);
    const handleNOTClose = () => setOpenNOT(false);
    const handleITOpen = () => setOpenIT(true);
    const handleITClose = () => setOpenIT(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <>
        <Grid container justifyContent={'center'} spacing={16}>
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
                    <ListItem><Button style={{color: 'black'}} onClick={handleSEOpen}><Typography>Freelance Software Engineer</Typography></Button></ListItem>
                    <ListItem><Button style={{color: 'black'}} onClick={handleNOTOpen}><Typography>Network Operations Technician</Typography></Button></ListItem>
                    <ListItem><Button style={{color: 'black'}} onClick={handleITOpen}><Typography>IT Support Specialist</Typography></Button></ListItem>

                </List>
            </Grid>
            
        </Grid>

        <Modal
        open={openSE}
        onClose={handleSEClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Freelance Software Engineer and Production Artist
          </Typography>
          <Typography sx={{ mt: 2 }}>
          - Production Artist for <Link target="_blank" href="https://www.yepitsrocketscience.com/the-book.php" color="#000">Yep, It's Rocket Science!</Link><br />
          - Graphic design using Adobe Creative Suite<br />
          - Web development with HTML, CSS, and JavaScript.<br />
          - Managed Wordpress sites for various clients.<br />
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openNOT}
        onClose={handleNOTClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h6">
            Network Operations Technician
          <Typography variant="h5" component="h5">Convergence Networks</Typography>
          </Typography>
          <Typography sx={{ mt: 2 }} centered>
            - Invited to join the Network Operations Center for my proven attention to detail in previous roles.<br />
            - Effectively managed a high number of user administration tickets for all US clients.<br />
            - Optimized processes with documentation creation and updates during multi-company merger.<br />
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openIT}
        onClose={handleITClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            IT Support Specialist
          </Typography>
          <Typography sx={{ mt: 2 }}>
          - Translated technical concepts into easily understandable terms for diverse audiences.<br />
          - Spearheaded research, proposal, and successful implementation of the organization's inaugural integrated inventory and ticket management system.<br />
          - Optimized operational efficiency through the use of existing licenses. <br />
          </Typography>
        </Box>
      </Modal>

        </>

     );
}