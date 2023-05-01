import React from 'react'
import { Box} from '@mui/material';
import SQLFormComponent from './SQLFormComponent';
import SQLResult from './SQLResult';
import ServerPointFieldComponent from './ServerPointFieldComponent';


function MainSectionComponent() {
    return ( 
    <>
    <Box>
      <ServerPointFieldComponent/>
    </Box>
    <Box>
      <SQLFormComponent/>
    </Box>
    <Box>
       <SQLResult/>
    </Box>
    </> 
    );
}

export default MainSectionComponent;