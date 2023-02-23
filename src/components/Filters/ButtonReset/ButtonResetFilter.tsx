
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import {  resetFilter } from '../../../feactures/dog/DogSlice';

const ButtonResetFilter = () => {

    const dispatch = useAppDispatch()

  return (
    <>
    <Button sx={{backgroundColor: '#724B7E', color: '#fff', borderRadius: '2px' , margin: '10px'}}  onClick={() => dispatch(resetFilter())} >
         Reset Filters
    </Button>
    </>
  )
}

export default ButtonResetFilter