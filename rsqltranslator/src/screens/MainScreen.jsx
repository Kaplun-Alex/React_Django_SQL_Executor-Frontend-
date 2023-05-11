import React from 'react';
import { Box } from '@mui/material';
import FooterSectionComponent from '../components/FooterSectionComponent';
import HeaderSectionComponent from '../components/HeaderSectionComponent';
import MainSectionComponent from '../components/MainSectionComponent';


const MainScreen = () =>{
  return (
    <>
      <section>
        <header>
          <HeaderSectionComponent/>
        </header>
      </section>

      <section>
        <Box>
          <MainSectionComponent/>
        </Box>
      </section>

    </>
  )
}

export default MainScreen;