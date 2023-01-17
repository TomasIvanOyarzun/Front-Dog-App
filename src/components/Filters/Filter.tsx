import React from 'react'
import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'
import { temperamentSelect, useFetchTemperamentsQuery } from '../../feactures/dog/DogSlice'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import Temperament from './Temperament/Temperament';
import SizeDogHeigth from './SizeDog/SizeDogHeight';
import SizeDogWeight from './SizeDog/SizeDogWeight';
import CheckBox from './CheckBoxOrder/CheckBox';
import ButtonResetFilter from './ButtonReset/ButtonResetFilter';

const Filter = () => {
     const options = useAppSelector(state => state.dogReducer.fetchDog)
     console.log(options)
  return (
    <Box display='flex' flexDirection='column' p={2} bgcolor='#fff'  borderRadius='4px'  >
        
       <Typography gutterBottom variant="h4" color='#64BE43' fontWeight='700' component="div">
       filters and sorts
       </Typography>
       <Divider/>
       <Temperament/>
       <Divider/>
       <Typography color='#464646' gutterBottom variant="h6" component="div">
          Size
       </Typography>
       <Typography color='#464646' gutterBottom  component="div">
          Height
       </Typography>
        <SizeDogHeigth/>

        <Typography color='#464646' gutterBottom  component="div">
          Weight
       </Typography>
        <SizeDogWeight/>
        <Divider/>
        <Typography color='#464646' gutterBottom variant="h6" component="div">
          Order
       </Typography>
        <CheckBox/>
        <Divider/>
         <ButtonResetFilter/>
       
    </Box>
  )
}

export default Filter