import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CVault from '../vaults/ConstantVault';
import { observer } from 'mobx-react-lite';


const HeaderSectionComponent = observer(() => {
    return ( 
      <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  sx={{ bgcolor: 'text.primary' }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              SERVER: <div>
                {CVault.getServerEndpoint()}
                </div>
            </Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
      </> 
    );

}
)

export default HeaderSectionComponent;