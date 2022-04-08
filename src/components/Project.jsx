
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import ProjectLink from './ProjectLink';
import { useState } from 'react';
const Project = () => {
    const [projecto, setProjecto] = useState(0);

  return (
    <Box sx={{ width: '100%', display:'flex',
     maxWidth: 360, bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders" style={{width:'50%' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{setProjecto(1)}}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText className='listProject' primary="Saving" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{setProjecto(2)}}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText className='listProject' primary="Track" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <ProjectLink projecto={projecto}  style={{width:'50%' }}/>
    </Box>
  );
}

export default Project