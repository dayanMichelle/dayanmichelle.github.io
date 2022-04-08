import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { BoxContainer } from './BoxContainer';

export const AppBar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Box
             sx={{ marginTop:'30px', width: '100%',display:'flex',justifyContent:'end' }}>
                <BottomNavigation
                    showLabels
                   
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    style={{ gap: '15px' }}
                >
                    <BottomNavigationAction className='btnBar'  icon={<HomeIcon />} />
                    <BottomNavigationAction className='btnBar' icon={<DocumentScannerIcon />}  />
                    <BottomNavigationAction  className='btnBar' icon={<CategoryIcon />} />
                    <BottomNavigationAction className='btnBar' icon={<FeaturedVideoIcon />} />
                    <BottomNavigationAction className='btnBar' icon={<ContactMailIcon />} />
                </BottomNavigation>

            </Box>
           <BoxContainer render={value}/>
        </>

    );
}