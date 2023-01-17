
import React from 'react'
import {Grid,  Divider} from '@mui/material'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import size from '../../../images/size.png'
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { useWidthScreen } from '../../../hooks/customHooks';


const material = [{name : 'breed name', description : 'All the names of the dogs are the names of the breed specifically' , icon : <PetsIcon sx={{bgcolor: '#ff'}} fontSize='large'/> },
{name : 'Image', description : 'may include a personalized image of said race created', icon : <AddPhotoAlternateIcon sx={{bgcolor: '#ff'}} fontSize='large' />},
{ name : 'Temperament' , description : 'You can choose the general temperament of that specific breed', icon : <ThermostatIcon sx={{bgcolor: '#ff'}} fontSize='large' /> },
{name : 'Size' , description : 'You can also specify the size of the breed' , icon : <DesignServicesIcon sx={{bgcolor: '#ff'}} fontSize='large' />}
]
const Welcome = () => {

  const {width} = useWidthScreen()
  return (
    <Container>
    <Box  id='welcome' marginBottom='20px'  display='flex' width='100%' height={width > 950 ? '500px' : '100%' } justifyContent='center' alignItems='center' >
            
    
  
    
   
     <Box display='flex' width='100%' height='100%' justifyContent='center' alignItems='center'>

   
    <Grid container bgcolor='#fff'  style={{position: 'relative' , zIndex: 1}}  >
        <Grid item xs={12} md={4} lg={4}>
              <img width='100%' src='https://www.maricopa.gov/ImageRepository/Document?documentId=77037' alt='dog-welcome'/>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%' height='100%'>
                 <Typography fontWeight='bold' color='#64BE43' variant="h3"  sx={{textAlign: 'center'}} gutterBottom>Create your dog breed</Typography>
                 <Box width='80%'>
                 <Typography color='#464646'  fontWeight="300" gutterBottom>Find all breeds of dogs, and if you are a user, you can also create your own.</Typography>

                
                 <Grid container spacing={2}>
                
                {material.map(el => (
                  <Grid item xs={12} md={6}  >
                  <Box display='flex' width='100%' height='100%' bgcolor='rgba(0, 0, 0, 0.056)' borderRadius= '4px' >
                     <Box>
                     <Avatar sx={{ backgroundColor: '#a2fbb0', backgroundImage: 'linear-gradient(90deg, #a2fbb0 0%, #05942f 100%)', margin : '12px', width: '60px' , height: '60px'}}>
                     {el.icon}
                      </Avatar>
                      
                     </Box>
                     <Box  width="100%">
                      <Typography color='#64BE43' fontFamily='Segoe UI' variant='h5' fontWeight='600'>{el.name}</Typography>
                      <Typography margin='10px' color='#666' fontWeight='100' fontSize='14px'>{el.description}</Typography>
                     </Box>
                  </Box>
                    </Grid>
                ))}
               
                 </Grid> 
                 </Box>
                 
            </Box>
        </Grid>
              
      </Grid>
      </Box>
      
     
      </Box>
      </Container>
      
  )
}

export default Welcome