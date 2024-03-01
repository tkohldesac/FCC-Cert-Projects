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
                    <ListItem><Button underline="always" style={{color: 'black', textDecoration: 'underline'}} onClick={handleNOTOpen}> Network Operations Technician</Button></ListItem>
                    <ListItem><Button underline="always" style={{color: 'black', textDecoration: 'underline'}} onClick={handleITOpen}>IT Support Specialist</Button></ListItem>
                    <ListItem><Button underline="always" style={{color: 'black', textDecoration: 'underline'}} onClick={handleSEOpen}> Freelance Software Engineer</Button></ListItem>

                </List>
            </Grid>
            
        </Grid>

        <Modal
        open={openSE}
        onClose={handleSEClose}
      >
        <Box sx={style}>
          <Typography variant="h6">
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
          <Typography variant="h6">
            Network Operations Technician
          </Typography>
          <Typography variant="h5" >Convergence Networks</Typography>
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
          <Typography variant="h6">
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