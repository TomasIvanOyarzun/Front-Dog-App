import React from 'react'
import { Container , Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { useWidthScreen } from '../../hooks/customHooks';
import PetsIcon from '@mui/icons-material/Pets';
import Avatar from '@mui/material/Avatar';

const CreateDogLanding = () => {

    const {width} = useWidthScreen()
  return (
    <Container>
      <Box sx={{width: '100%', height: width > 850 ? '380px' : '100%', display: 'flex', flexDirection: 'column', alignItems : 'center'}}>
      <Typography color='#000' variant={width < 850 ? 'h4' : 'h3'} fontWeight='1000'  marginTop={width < 850 ? '300px' : '0px'} >Create your dog breed</Typography>
        <Box width='100%' sx={{display: 'flex', flexDirection: width > 850 ? 'row' : 'column',  justifyContent: 'space-evenly', alignItems: width > 850 ? 'none' : 'center' }}>
        <Box  display='flex' flexDirection='column' alignItems='center' width= {width > 850 ? '25%' : '80%' } marginTop='30px' marginBottom='30px' >
            
              <Avatar sx={{ width: 50, height: 50, bgcolor: '#895799' }}><PetsIcon fontSize='large'/></Avatar>
              <Typography variant='h5' fontWeight='600' color='#895799' >Breed Name</Typography>
              <Box sx={{ width: '100%',textJustify: 'inter-word', textAlign: 'justify', marginTop: '15px'}}><Typography  color='#464646'>
              All the names of the dogs are actually the names of their respective breeds. This means that each dog is named after the breed it belongs to. 
              </Typography></Box>
             </Box>
        <Box display='flex' flexDirection='column' alignItems='center' width={width > 850 ? '25%' : '80%' } marginTop='30px' marginBottom='30px' >
             <Avatar sx={{ width: 50, height: 50, bgcolor: '#895799' }}><PetsIcon fontSize='large'/></Avatar>
             <Typography variant='h5' fontWeight='600' color='#895799' >Image</Typography>
              <Box  sx={{ width: '100%',textJustify: 'inter-word', textAlign: 'justify', marginTop: '15px'}}>
              <Typography   color='#464646'>
              When adding a new or existing breed, you may include an image that represents it, a good quality image is recommended if possible.
              </Typography>
              </Box>
            </Box>
        <Box display='flex' flexDirection='column' alignItems='center' width={width > 850 ? '25%' : '80%' } marginTop='30px' marginBottom='30px'>
        <Avatar sx={{ width: 50, height: 50, bgcolor: '#895799' }}><PetsIcon fontSize='large'/></Avatar>
        <Typography variant='h5' fontWeight='600' color='#895799' >Temperament</Typography>
              <Box sx={{ width: '100%',textJustify: 'inter-word', textAlign: 'justify', marginTop: '15px'}}>
              <Typography  color='#464646'>
              
              Something important that dogs are characterized by is temperament, choose the temperament corresponding to your breed of dog.
                            </Typography>
              </Box>
        </Box>

        </Box>
      </Box>
    </Container>
  )
}

export default CreateDogLanding