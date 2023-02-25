import React from 'react'
import { getUserData, useFetchFavoriteUserFullPropertyQuery } from '../../../../feactures/user/UserSlice'
import CardsFavorite from './CardsFavorite'
import { Box} from '@mui/system'
import { Grid } from '@mui/material'
import Spinner from '../../../../components/Spinner/Spinner'

interface Props {
    currentPage : number
}
const CardMap = ({currentPage} : Props) => {
    
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const {data, isError , isSuccess} = useFetchFavoriteUserFullPropertyQuery(user?._id)

  
    const postPerPage = 6
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    let currentComment = isSuccess && isError === false &&  data?.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>

<Box flex={8} p={2} width='100%' >
        
        <Grid container    >
      
         {isError ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px'}}>
          <Spinner/>
          </Box> : 
          Array.isArray(currentComment) && currentComment.map(el => (
            <Grid xs={12} md={6} lg={4} p={1}   display='flex' justifyContent='center'  >
           
           <CardsFavorite dog={el}/>
          </Grid>
         ))}
        </Grid>
       
        </Box>
 
    </>
  )
}

export default CardMap