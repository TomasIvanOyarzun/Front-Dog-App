import React from 'react'
import CarruselN from '../../components/Carrusel/CarruselN'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import CardSlice from './CardInicio/CardSlice'

import Welcome from './Welcome/Welcome'
import dog_black from '../../images/dog-plus-dog-black.png'
import ImageList from './ImageList/ImageList';
import { useWidthScreen } from '../../hooks/customHooks';

import black_dog from '../../images/black-dog.webp'
import Developer from './Developer/Developer';
import SearchDogInfo from './SearchDog/SearchDogInfo';
const Inicio = () => {

  const {width } = useWidthScreen()
 
  return (
    <>
      
      <Box width='100%' display='flex' justifyContent='center'  flexDirection='column'   >
        
            <CarruselN/>
            <SearchDogInfo/>
            <Developer/>
            
            <Welcome />
               
            <ImageList/>
               
       

                
             
              

         
          
      
        
     </Box>
     </>
       
   
  )
}

export default Inicio