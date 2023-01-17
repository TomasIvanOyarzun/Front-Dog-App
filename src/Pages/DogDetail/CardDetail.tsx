import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
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