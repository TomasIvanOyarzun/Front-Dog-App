import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import { filterOptions } from '../../../feactures/dog/DogSlice';

const marks = [
  {
    value: 12,
    label: '12 cm',
  },
 
  {
    value: 50,
    label: '50 cm',
  },
];


function valuetext(value: number) {
    return `${value}cm`;
  }
  
const SizeDog = () => {
  const disptach = useAppDispatch()
   const [number , setNumber] = useState(0)
   const options = useAppSelector(state => state.dogReducer.fetchDog)
    const handleOnChange = ( e : Event , value : number | number[] ,activeThumb: number) => {
         setNumber(typeof value === 'number' ? value : 0)
          disptach(filterOptions({
             ...options,
             height : value.toString()
          }))
    }

    
  return (
    <Box >
    <Slider
      aria-label="Custom marks"
      defaultValue={Number(options.height)}
      value={Number(options.height)}
      getAriaValueText={valuetext}
     
      step={1}
      sx={{color : '#64BE43'}}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={ handleOnChange}
      
    />
  </Box>
  )
}

export default SizeDog