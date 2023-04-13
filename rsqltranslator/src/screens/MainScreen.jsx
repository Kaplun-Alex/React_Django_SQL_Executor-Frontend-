import React from 'react';
import {Stack} from '@mui/material'
import FooterSectionComponent from '../components/FooterSectionComponent';
import HeaderSectionComponent from '../components/HeaderSectionComponent';
import MainSectionComponent from '../components/MainSectionComponent';


const MainScreen = () =>{
  return (
    <>
        <Stack> 
            <HeaderSectionComponent/>
        </Stack>

        <Stack> 
                <MainSectionComponent/>
        </Stack>

        <Stack position={'bottom'}>
            <footer>
                <FooterSectionComponent/>
            </footer>
        </Stack>
    </>
  )
}

export default MainScreen;