import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AboutImage from '../../assets/About/About.webp'
import AboutImage2 from '../../assets/About/About2.webp'
const About = () => {
  return (
    <Box sx={{
        overflow:'hidden',
        backgroundColor:'#',
        mb:4,

    }}>
        <Typography sx={{
            color:'#000000',
            fontSize:'1.3rem',
            paddingX:5,
            paddingY:3,
            textAlign:'center'
        }}>

        ABOUT YKFITSOLUTIONS
        </Typography>
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'row'},
            justifyContent:'center',
            alignItems:'center'
        }}>

            
        {/* about section1 */}
        <Box sx={{
            display:'flex',
            flexDirection:'column'
        }}>
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column',sm:'row'},
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
                    width: { xs: '80vw', sm: '60vw', md: '40vw' },
                  
                    height:'300px',
                    display: 'flex',
                    backgroundImage: `url(${AboutImage})`, 
                    backgroundSize: 'cover',   
                    backgroundPosition: 'center', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>
            </Box>
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100vw', sm: '60vw', md: '40vw' },
                backgroundColor: '#fff',
            }}>
                <Typography sx={{
                    color: '#000000',
                    my: 2,
                    fontSize:{xs:'1.3rem', sm:'1.5rem'},
                    overflow:'hidden'
                }}>
                    Technical Experience
                </Typography>
                <Typography sx={{
                    color: '#785E5E',
                    my: 2,
                    px:5,
                    fontSize:{xs:'14px', sm:'18px'},
                    overflow:'hidden'
                }}>
                    We are well-versed in a variety of operating systems, networks, and databases. At YKF IT Solutions we work with just about any technology that a small business would encounter. We use this expertise to help customers with small to mid-sized projects. 
                </Typography>
                </Box>
                </Box>
                {/* about section 2 */}
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column', sm:'row-reverse'},
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
                    width: { xs: '80vw', sm: '60vw', md: '40vw' },
                  
                    height:'300px',
                    display: 'flex',
                    backgroundImage: `url(${AboutImage2})`, 
                    backgroundSize: 'cover',   
                    backgroundPosition: 'center', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
>               
            </Box>

            
            <Box sx={{
                //  height:{xs:'400px', sm:'40vh'},
                height:'300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100vw', sm: '60vw', md: '40vw' },
                backgroundColor: '#fff',
            }}>
                <Typography sx={{
                    color: '#000000',
                    my: 2,
                    fontSize:'1.5rem',
                    overflow:'hidden'
                }}>
                     High ROI
                </Typography>
                <Typography sx={{
                    color: '#785E5E',
                    my: 2,
                    px:5,
                    fontSize:{xs:'14px', sm:'18px'},
                    overflow:'hidden'
                }}>
                      Do you spend most of your IT budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business.
                </Typography>
                </Box>
                </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default About