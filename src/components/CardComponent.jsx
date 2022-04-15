import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Link from '@mui/material/Link';

export const CardComponent = () => {
  return (
    <Card sx={{ 
        maxWidth: 300,
        height:500,
        margin: '0px auto',
        borderRadius:'30px',
        color:'white',
        backgroundColor:'transparent',
        backdropFilter:'blur(3px)',
        webkitBoxShadow:' 4px 3px 15px 1px rgba(234,6,101,0.64);',
        boxShadow: '4px 3px 15px 1px rgba(234,6,101,0.64);'
     }}>
      <CardContent>
      <Avatar alt="Remy Sharp"
      sx={{
        width:'150px',
        height:'150px',
        margin:'10px auto',
        }} src="https://media-exp1.licdn.com/dms/image/C5603AQGQcq75a7LFzg/profile-displayphoto-shrink_800_800/0/1649173279089?e=1654732800&v=beta&t=U-JzddlmoxZdecu-zQ98MMuhnb6iM8V9Hslg4O-vA8s" />
        <div style={{display:'flex',gap:'5px',alignItems:'center'}}><AddLocationAltIcon /><p> Santiago de chile</p></div>
        <div style={{display:'flex',gap:'5px',alignItems:'center'}}><LanguageIcon /><p> www.dayanarango.com</p></div>
        <div style={{display:'flex',gap:'5px',alignItems:'center'}}><EmailIcon /><p> developer@dayanarango.com</p></div>
       </CardContent>
      <CardActions>
          <div style={{display:'flex',gap:'20px',margin:'30px auto'}}>
               <Link href="#"  style={{color:'white'}} ><GitHubIcon /></Link>
               <Link href="#"  style={{color:'white'}} ><InstagramIcon /></Link>
               <Link href="#"  style={{color:'white'}} ><TwitterIcon /></Link>
               <Link href="#"  style={{color:'white'}} ><YouTubeIcon /></Link>
          </div>
     
      </CardActions>
    </Card>
  )
}

 