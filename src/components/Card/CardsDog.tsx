
import { useFetchDogsQuery } from '../../feactures/dog/DogSlice'
import CardDog from './CardDog'
import { Box} from '@mui/system'
import { Grid } from '@mui/material'
import { useAppSelector } from '../../hooks/toolkitHooks'
import Spinner from '../Spinner/Spinner'
const CardsDog = () => {
     const page = useAppSelector(state => state.dogReducer.fetchDog)
   
    const {data, isError} = useFetchDogsQuery(page)

  return (
  
    <Box flex={8} p={2} >
        
        <Grid container    >
      
         {isError ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px'}}>
          <Spinner/>
          </Box> : 
          data?.docs.map(el => (
            <Grid xs={12} md={6} lg={4} p={2}   display='flex' justifyContent='center'  >
           
            <CardDog dog={el}  />
          </Grid>
         ))}
        </Grid>
       
        </Box>
  )
}

export default CardsDog