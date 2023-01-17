import React from 'react'

import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import CardsFavorite from './CardsFavorite/CardsFavorite';

const ListFavoriteUser = () => {



  return (
    <Box display='flex' flexDirection='column' width='100%' height='100%'>
        <CardsFavorite/>
       
    </Box>
  )
}

export default ListFavoriteUser