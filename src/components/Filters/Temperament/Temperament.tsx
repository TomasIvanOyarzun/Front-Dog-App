import React from 'react'
import { filterOptions, increment, temperamentSelect} from '../../../feactures/dog/DogSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import {  useFetchTemperamentsQuery } from '../../../feactures/dog/DogSlice'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'



const Temperament = () => {
  const options = useAppSelector(state => state.dogReducer.fetchDog)
    const [temperament, setTemperament] = React.useState('');
    const dispatch = useAppDispatch()
    
    const handleChange = (event: SelectChangeEvent) => {
      setTemperament(event.target.value as string);
        dispatch(filterOptions({
              ...options,
              temperament : event.target.value
        }))
        dispatch(increment(1))
    };
    const {data} = useFetchTemperamentsQuery('')
  return (
    <>
    <Typography   color='#464646' fontWeight='500' gutterBottom variant="h6" component="div">
       Temperaments
       </Typography>
       <Box sx={{ minWidth: 120, marginBottom: '15px' }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Temperament</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={options.temperament}
          label="temperament"
          onChange={handleChange}
        >
          {data?.map(el => (
            <MenuItem color='#464646' key={el._id} value={el.name}>{el.name}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>
    </>
  )
}

export default Temperament