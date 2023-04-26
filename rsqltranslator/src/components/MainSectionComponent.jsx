import React from 'react'
import { Box} from '@mui/material';
import SQLFormComponent from './SQLFormComponent';
import SQLResult from './SQLResult';


function MainSectionComponent() {
    return ( 
    <>
    <Box>
      <p>working servers fields</p>
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