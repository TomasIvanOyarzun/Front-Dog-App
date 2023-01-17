import React from 'react'
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import { filterOptions, resetFilter } from '../../../feactures/dog/DogSlice';

const ButtonResetFilter = () => {

    const dispatch = useAppDispatch()

  return (
    <>
    <Button sx={{backgroundColor: '#64BE43', color: '#fff', borderRadius: '2px' , margin: '10px'}}  onClick={() => dispatch(resetFilter())} >
         Reset Filters
    </Button>
    </>
  )
}

export default ButtonResetFilter