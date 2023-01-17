import React from 'react'
import { Box } from "@mui/material";
import { useFetchDogsQuery } from '../../feactures/dog/DogSlice';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import { increment } from '../../feactures/dog/DogSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';





const  MyPagination = () => {
  const options = useAppSelector(state => state.dogReducer.fetchDog)
    const {data, } = useFetchDogsQuery(options)
    const dispatch = useAppDispatch()
 
    const handleOnChange = (event: React.ChangeEvent<unknown>, pages: number) => {
        
          dispatch(increment(pages))
         
    }
  return (
    <Box my={2} display="flex" justifyContent="center">
        
          <Pagination count={data?.totalPages}  color='primary' onChange={handleOnChange} />
         
        
      </Box>
  )
}

export default MyPagination
