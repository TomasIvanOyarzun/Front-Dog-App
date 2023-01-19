import React from 'react'
import CarruselN from '../../components/Carrusel/CarruselN'
import { Box } from '@mui/system'
import Welcome from './Welcome/Welcome'
import ImageList from './ImageList/ImageList';
import Developer from './Developer/Developer';
import SearchDogInfo from './SearchDog/SearchDogInfo';
import { useFetchConfirmAccountMutation } from '../../feactures/user/UserSlice';
import { useParams } from 'react-router-dom';
import DiagloMsgEmailConfirm from './MsgDialogConfirmEmail/DiagloMsgEmailConfirm';


const Inicio = () => {
 
  const [fetchConfirm , response] = useFetchConfirmAccountMutation()
  const [responseBack , setResponseBack] = React.useState<{error : boolean, msg: string}>()
   const {token} = useParams()



 
  React.useEffect(  () => {
      if(token !== undefined) {
        fetchConfirm(token).unwrap().then(response => {
          setResponseBack(response)
          console.log(response)
        } )
        .catch(error => setResponseBack(error.data ))
      }
        
  }, [])
  
  console.log(responseBack)

  return (
    <> 
     { responseBack!== undefined  &&  <DiagloMsgEmailConfirm responseBack={responseBack}/>}
     
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