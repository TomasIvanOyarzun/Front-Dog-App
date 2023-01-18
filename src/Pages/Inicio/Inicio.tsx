
import CarruselN from '../../components/Carrusel/CarruselN'
import { Box } from '@mui/system'


import Welcome from './Welcome/Welcome'

import ImageList from './ImageList/ImageList';
import { useWidthScreen } from '../../hooks/customHooks';


import Developer from './Developer/Developer';
import SearchDogInfo from './SearchDog/SearchDogInfo';
const Inicio = () => {

 
 
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