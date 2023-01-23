
import Typography from '@mui/material/Typography';
import { DogApi } from '../../feactures/dog/DogSlice';

import {Box} from '@mui/material'

interface Props {
    dog : DogApi | undefined
}
const CardDetail = ({dog} : Props) => {
  return (
    <Box width='100%'>
   
      <img width='100%' src={dog?.image}></img>

      
          <Typography gutterBottom variant="h4" component="div">
            {dog?.name}
          </Typography>
      
     
    
    </Box>
  )
}

export default CardDetail