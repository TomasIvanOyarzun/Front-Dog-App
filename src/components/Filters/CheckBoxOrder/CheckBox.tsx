import React from 'react'
import { Box } from '@mui/system'
import Checkbox from '@mui/material/Checkbox';
import PetsIcon from '@mui/icons-material/Pets';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import { filterOptions } from '../../../feactures/dog/DogSlice';
import { Typography } from 'antd';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 
const CheckBox = () => {
  const [sortDirection, setSortDirection] = React.useState<number>();
  const dispatch = useAppDispatch()
  const options = useAppSelector(state => state.dogReducer.fetchDog)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) === sortDirection) {
      setSortDirection(0)
    } else {
      setSortDirection(Number(event.target.value));
      
    }
  };
  
  React.useEffect(()=> {
        if(sortDirection === 1 || sortDirection === -1  || sortDirection === 0){
          dispatch(filterOptions({...options , order : sortDirection}))
        }
  }, [sortDirection])
  return (
    <div>
      <Box display='flex' alignItems='center'>
      <Checkbox
        checked={options.order === 1}
        onChange={handleCheckboxChange}
        color='success'
        value="1"
        defaultValue={sortDirection}
        inputProps={{
          'aria-label': 'checkbox to sort ascending'
        }}
      />
      <Typography color='#464646'>Ascending</Typography>
    
      </Box>
      <Box display='flex' alignItems='center'>
      <Checkbox
        checked={options.order === -1 }
        onChange={handleCheckboxChange}
        value="-1"
        color='success'
        defaultValue={sortDirection}
        inputProps={{
          'aria-label': 'checkbox to sort descending'
        }}
      />
      <Typography color='#464646'>Descending</Typography>
      </Box>
    </div>
  );
}

export default CheckBox