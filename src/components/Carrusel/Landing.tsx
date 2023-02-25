import { Box, } from '@mui/system'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useWidthScreen } from '../../hooks/customHooks';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import pug from '../../images/pug.png'
import ShowImageMoved from './ShowImageMoved';
import CreateDogLanding from './CreateDogLanding';
const Landing = () => {
  
  const {width} = useWidthScreen()
  
  const style = {
    bgcolor: "#D482F0",
    borderRadius: '0px',
    ":hover": {
      bgcolor: "#E2AEF3",
      transition : '1s'
    }
  };
  return (
 

<Box  display='flex' flexDirection='column' width='100%' height='100%' >
    <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='700px' bgcolor='#570968' sx={{backgroundImage: 'linear-gradient(0deg, #570968 0%, #895799 100%)'}}>
      <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='100%' sx={{backgroundImage: `url(${pug})`, backgroundSize: width > 1400 ? '50%' : 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <Box  width={width > 1200 ? '30%' : '80%'  } maxHeight='100%'  >
        <Typography color='#FFF' variant={width < 600 ? 'h3' : 'h2'} fontWeight='1000' >Learn all breeds of Dogs</Typography>
        <Typography color='#FFF' >Find the breed of dog that suits your needs, create your own breeds and save it on
           the page, help us complete the entire list of breeds.</Typography>
           <Button href='#search' sx={style} variant="contained" endIcon={<ArrowCircleDownIcon />}>
        About
      </Button>
      </Box>
      </Box>
    </Box>
    <Box  
  left={width > 1200 ? '25%' : '5%'}
  position='absolute'
  width={width > 1200 ? '50%' : '90%'}
  height='400px'
  bgcolor='#111'                    
  sx={{transform : `translateY(${width > 1200 ? '150%' : '150%'})`, zIndex: '100', borderRadius: '5px' }}
  >
   <ShowImageMoved/>

  </Box>
  
 


    <Box width='100%' height={ width > 850 ? '720px' : '100%'} sx={{display: 'flex' , flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#6d1c6d', backgroundImage: 'linear-gradient(0deg, #570968  16%, #ffffff 100%)'}}>
       <CreateDogLanding/>
    </Box>
    
        
       

         
     
   
            </Box>
          
           
    
  )
}

export default Landing