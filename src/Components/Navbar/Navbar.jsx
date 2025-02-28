import React from 'react'
import Box from '@mui/material/Box';
import logoImage from '../../assets/Navbar/logoImage.webp'
import { Typography } from '@mui/material';
const Navbar = () => {
  return (
    <Box sx={{
        // opacity:'0.4',
        overflow:'hidden',
        display:'flex',
        p:{xs:2, sm:3},
        justifyContent:'space-around',
        alignItems:'center',
        // width:'100%',
        height:'100px',
        backgroundColor:'#EFF3F4',
    }}>
        <Box sx={{
             overflow:'hidden',
             display:{xs:'none', sm:'flex'},
             justifyContent:'flex-start',
             alignItems:'center',
             gap: 2
        }}>
            <Typography>HOME</Typography>
            <Typography>SERVICES</Typography>
        </Box>
        <Box>
            <img src={logoImage}></img>
        </Box>
        <Box sx={{
             display:{xs:'none', sm:'flex'},
             justifyContent:'flex-start',
             alignItems:'center',
             gap: 2
        }}>
            <Typography>CONTACT US</Typography>
            <Typography>JOBS</Typography>
        </Box>
    </Box>
  )
}

export default Navbar