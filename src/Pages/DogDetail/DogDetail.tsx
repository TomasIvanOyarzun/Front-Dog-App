import { useFetchDogByIdQuery } from '../../feactures/dog/DogSlice'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardDetail from './CardDetail';
import SliderCardDetail from './SliderCardDetail/SliderCardDetail';

import BreadcumbsDetail from './BreadcumbsDetail';
import Stack from "@mui/material/Stack";
import Comment from './Comment/Comment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { DogApi } from '../../feactures/dog/DogSlice';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ListDogDetail from './ListDogDetail/ListDogDetail';
import React from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const DogDetail = () => {

   
    const { id} = useParams()
  const { data, isSuccess } = useFetchDogByIdQuery(id)
  const [isZoomed, setIsZoomed] = React.useState(false)
  const [value, setValue] = React.useState('1');
    
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleZoomChange = React.useCallback((shouldZoom : any )=> {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <>
  
  
     <Container  maxWidth='lg'  >
     <Stack p={2}><BreadcumbsDetail/></Stack>
        
        <Box display='flex' justifyContent='center'  marginTop='20px' >
        <Grid container  >
        <Grid xs={12} md={6} lg={6}    >
        <Box width='100%'  >
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        <img width='100%' height= '380px'  src={data?.image}></img>

        </ControlledZoom>
       
                      </Box>
        </Grid>

        <Grid xs={12} md={6} lg={6}     >

        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '10px' }}>
          <TabList onChange={handleChange} sx={{marginLeft: '10px', display: 'flex' , justifyContent: 'flex-end'}} color='#111'
        aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <Grid container>
        <Grid item xs={12} md={12} lg={12}>
        <TabPanel value="1">
        <Box sx={{display: 'flex' , flexDirection: 'column', width: '100%', alignItems: 'center'}} >
              <Typography gutterBottom variant="h5" component="div">Features</Typography>
             <ListDogDetail dog={data}/>
           
          
          </Box>
            
        </TabPanel>
        </Grid>
        <Grid item xs={12}  md={12} lg={12}>
        <TabPanel value="2">
             
     
          
             
          <Typography gutterBottom variant="h5"  color='#64BE43' fontWeight='700'>Temperaments</Typography>
        
        {data?.temperament.map((el,index) => (
      <Button  sx={{margin: '5px', bgcolor: '#666'}} variant="contained" key={index}>{el}</Button>
                                                                                ))}
       
        </TabPanel>
        </Grid>
        <TabPanel value="3">Item Three</TabPanel>
        </Grid>
      </TabContext>
        <CardActions sx={{width: '100%'}}>


      <Box sx={{width: '100%' ,display: 'flex' , flexDirection: 'column', alignItems: 'center' }}>
      
      
      
          
        </Box>
      </CardActions>
        </Grid>
         
         
        
        <Grid item xs={12}>
          
           { isSuccess && <SliderCardDetail temperaments={data.temperament }/>}
        </Grid>
        <Box height='40px'></Box>
        <Grid item xs={12} >
          <Comment />
        </Grid>
      </Grid>
      </Box>
      </Container>
      
  </>
  )
}

export default DogDetail