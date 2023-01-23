import React from 'react'

import dog_one from '../../images/banner-1.png'
import dog_two from '../../images/banner-2.png'
import { Box, } from '@mui/system'
import Typography from '@mui/material/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@mui/material/Button';
import { useWidthScreen } from '../../hooks/customHooks';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
const CarruselN = () => {

  const {width } = useWidthScreen()
 
  return (
    <>

<Box  display='flex' width='100%' maxHeight='100vh'>
        
       

         
     
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} >
           
                {[dog_one, dog_two].map(el => (
                   <div style={{width: '100%', height: width > 1500 ? '100vh' : '100%', backgroundSize : 'cover'}}>
                   <img src={el} />
                   { width > 1500 &&
                   
                   <Slide direction="up" in={true} >
                   <div className="legend" style={{width : '50%', top: '30%', marginRight: '30px', backgroundColor: 'transparent'}}>
                 
                 <Typography color='#fff' variant='h2' fontFamily='revert-layer' fontWeight='1000'>Learn all breeds of Dogs</Typography>
                 <Typography color='#fff' variant='h5' fontFamily='revert-layer' fontWeight='300'>Find the ideal dog for you, get information on all dogs
                  classified by breed, and more</Typography>
                <Link id='#welcomes' to='#welcomes' style={{listStyle : 'none', textDecoration: 'none'}}><Button sx={{backgroundColor: '#64BE43', color: '#fff', borderRadius: '2px' , width : width > 710 ? '20%' : '40%' , height: '45px'}}>see more</Button></Link> 

          
           </div>
              </Slide>
           }
               </div> 
                ))}
                
               
            </Carousel>
           
            </Box>
            </> 
    
  )
}

export default CarruselN