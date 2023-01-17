import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import CardSlice from '../CardInicio/CardSlice'
import { Link } from 'react-router-dom'
import { useWidthScreen } from '../../../hooks/customHooks';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import PetsIcon from '@mui/icons-material/Pets';
const SearchDogInfo = () => {

    const {width} = useWidthScreen()
  return (
    <Box width='100%' height={width > 900 ? '800px' : '100%'}  display='flex' bgcolor='#f6f6f6' >
         
     <Container  sx={{ display:'flex', alignItems:'center'}}>
         <Box width='100%' height={width > 900 ? '800px' : '100%'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
         <Typography color='#64BE43' variant='h4' fontWeight='700' marginTop={width < 900 ? '30px' : '0'}>Find your favorite breed</Typography>
            <Box width={width > 700 ? '60%' : '100%'}>
           
            <Typography color='#464646' padding='18px'  fontWeight='300'>You can search for different breeds by name or filter,
             and also add it to your favorites list, although the last thing you will
              have to register on the page</Typography>
            </Box>
         <Grid container spacing={2}>

        <Grid item xs={12} md={5} lg={5}>
          <CardSlice/>
        </Grid>
        <Grid item xs={12} md={7} lg={7} >
         
          <Stack height={width > 700 ? '400px' : '100%'}  display='flex'  flexDirection='column' justifyContent={width > 700 ? 'space-evenly' : 'center'}   >

            <Box display='flex' marginBottom='12px' flexWrap='wrap' >
               <Box width={width > 700 ? '15%' : '100%'}>
               <Avatar sx={{ width: 90, height: 90 }}><PetsIcon fontSize='large'/></Avatar>
               </Box>
               <Box  width={width > 700 ? '85%' : '100%'} >
                <Typography color='#64BE43' variant='h5' fontWeight='500' >FIND YOUR FAVORITE BREED</Typography>
                <Typography color='#464646' fontWeight='300' >Get to know all the dog breeds on our website, where you can search and filter by size, personality,
                 abilities and much more. Find the perfect dog for you and your family.</Typography>
               </Box>
            </Box>
            
            <Box display='flex' marginBottom='12px' flexWrap='wrap' >
               <Box width={width > 700 ? '15%' : '100%'}>
               <Avatar sx={{ width: 90, height: 90 }}><PetsIcon fontSize='large'/></Avatar>
               </Box>
               <Box  width={width > 700 ? '85%' : '100%'} >
                <Typography color='#64BE43' variant='h5' fontWeight='500' >CREATE YOUR OWN BREED OF DOG</Typography>
                <Typography color='#464646' fontWeight='300' >You will be able to create your own unique breed by choosing from a wide variety of characteristics and options to personalize your ideal dog.
                 However, in order to access this functionality, you need to log in to our site.</Typography>
               </Box>
            </Box>

            <Box display='flex' marginBottom='12px' flexWrap='wrap' >
               <Box width={width > 700 ? '15%' : '100%'}>
               <Avatar sx={{ width: 90, height: 90 }}><PetsIcon fontSize='large'/></Avatar>
               </Box>
               <Box  width={width > 700 ? '85%' : '100%'} >
                <Typography color='#64BE43' variant='h5' fontWeight='500' >SAVE YOUR FAVORITE BREED</Typography>
                <Typography color='#464646' fontWeight='300' >you can save your favorite breeds to access them easily at any time. However, in order to enjoy this feature, you need to log in to our site, which will allow you to have personalized and secure access to all the features of our page.
                 Do not miss the opportunity to find your ideal partner on our website.</Typography>
               </Box>
            </Box>
          </Stack>
          
        </Grid>
      </Grid>
      <Link to='/home' style={{listStyle : 'none', textDecoration: 'none'}} >  <Button sx={{backgroundColor: '#64BE43', color: '#fff', borderRadius: '2px' , width :'100%' , height: '45px', margin: '20px'}}>see more breeds</Button></Link> 
         </Box>
     </Container>
  </Box>
  )
}

export default SearchDogInfo