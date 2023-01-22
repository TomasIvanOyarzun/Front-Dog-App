import React from 'react'
import { Box } from '@mui/material'

import CardsFavorite from './CardsFavorite/CardsFavorite';
import CardMap from './CardsFavorite/CardMap';
import PaginationCardFavorite from './CardsFavorite/PaginationCardFavorite';
import Typography from '@mui/material/Typography';

const ListFavoriteUser = () => {
   
  const [currentPage , setCurrentPage] = React.useState<number>(1)
  

  return (
    <Box display='flex' justifyContent='center' width='100%' height='100%' >
        <Box width='80%' height='80%' display='flex' flexDirection='column' alignItems='center'>
            <Typography color='#004d40' fontWeight='500' variant='h3'>List Favorites</Typography>
            <Typography color='#607d8b' fontWeight='400'>This is your favorites list, you can delete it by hitting the black heart</Typography>
            
            <CardMap currentPage={currentPage}/>
             <Box margin='10px'><PaginationCardFavorite setCurrentPage={setCurrentPage} postPerPage={6}/></Box>
        </Box>
    </Box>
  )
}

export default ListFavoriteUser