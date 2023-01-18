import React from 'react'
import CarruselN from '../../components/Carrusel/CarruselN'
import { Box } from '@mui/system'
import Welcome from './Welcome/Welcome'
import ImageList from './ImageList/ImageList';
import Developer from './Developer/Developer';
import SearchDogInfo from './SearchDog/SearchDogInfo';
import { useFetchConfirmAccountMutation } from '../../feactures/user/UserSlice';
import { useParams } from 'react-router-dom';


const Inicio = () => {
 
  const [fetchConfirm] = useFetchConfirmAccountMutation()
  const [responseBack , setResponseBack] = React.useState<{error : boolean, msg: string}>()
   const {token} = useParams()


  React.useEffect(() => {
      if(token !== undefined) {
        fetchConfirm(token).unwrap().then(response => setResponseBack(response) )
        .catch(error => setResponseBack(error  ))
      }
        
  }, [])

 
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