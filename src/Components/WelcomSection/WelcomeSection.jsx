import React from 'react'
import { Box, Typography, Button} from '@mui/material'
const WelcomeSection = () => {
  return (
   <Box sx={{
    overflow:'hidden',
    display:'flex',
    p:{xs:2, sm:3},
    alignItems:'center',
    height:'500px',
    backgroundColor:'#959DA7',
   }}>
        <Box sx={{
            zIndex:'1',
            position:'relative',
            marginLeft:{xs:'0px',sm:'50px', md:'200px'},
            maxWidth:'1500px',
            width:{xs: '80%', sm:'60%', md:'40%'}, 
        }}>
            <Typography sx={{
                fontSize:'2rem',
                fontWeight:'bold',
                textShadow:'2px 2px 15px black'
                
            }}>WELCOME</Typography>
            <Typography sx={{
                my:{xs:1, sm:2, md:3},
                fontWeight:'bold',
                textShadow:'2px 2px 10px black'
            }}>YKF IT Solutions provides you with best solutions for your software needs. From Integrated software to an aesthetic and customized website that describes your business in the best way possible, we have answers to any questions you might have for your technology-related requirements!</Typography>
            <Button sx={{
                p:2,
                fontWeight:'bold',
                borderRadius:'0px',
                my:2,
                color:'#fff',
                backgroundColor:'#000000',
                boxShadow: '5px 5px 10px rgba(0,0,0,1)'
            }}>FIND OUT MORE</Button>
        </Box>
   </Box>
  )
}

export default WelcomeSection