import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroImage from '../../assets/HeroSection/HeroImage3.jpg'
const HeroSection = () => {
  return (
    <Box sx={{ 
        position:'relative',
        zIndex:'1',
        overflow:'hidden',
        display:'flex',
        justifyContent:{xs:'center', sm:'flex-end'},
        alignItems:{xs:'center', sm:'flex-end'},
        backgroundImage:`url(${HeroImage})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'600px'
    }}>
        <Box sx={{
            zIndex: '10',
            // border:'2px solid black',
           position:'relative',
           top:'-20px',
            mx:4,
            p:{xs:3,sm:2},
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            height:{xs:'200px', sm:'300px'},
            width:{xs:'200px', sm:'300px'},
            borderRadius:'50%',
            backgroundColor:'#959DA7',
        }}>
            <Typography sx={{
                my:2,
                fontSize: {xs:'1.3rem', sm:'1.5rem'},
                textAlign:'center',
            }}>PROFESSIONAL TECHNOLOGY ASSISTANCE</Typography>
            <Button sx={{
                p: 2,
                borderRadius:'0px',
                my:2,
                color:'#fff',
                backgroundColor:'#000000',
                boxShadow: '5px 5px 10px rgba(0,0,0,1)'
            }}>BOOK NOW</Button>
        </Box>
    </Box>
  )
}

export default HeroSection