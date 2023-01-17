import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getUserData, useFetchFavoriteUserFullPropertyQuery, useFetchFavoriteUserQuery, useFetchUpdateUserMutation } from '../../../../feactures/user/UserSlice'
import { Checkbox, FormControlLabel } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';

import { Grid } from '@mui/material'
const CardsFavorite = () => {

    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const [currentPage , setCurrentPage] = React.useState(1)
   const [updateUser] = useFetchUpdateUserMutation()
    const {data, isError , isSuccess} = useFetchFavoriteUserFullPropertyQuery(user?._id)
    const favorite = useFetchFavoriteUserQuery(user?._id)

    const postPerPage = 6
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
  
  
    let currentComment = isSuccess && isError === false &&  data?.slice(indexOfFirstPost, indexOfLastPost)

    const handleOnClick = (e : string | undefined) => {
      
 

      const unicos = favorite.data?.filter((valor, indice) => {
        return favorite.data?.indexOf(valor) === indice;
      })
  
      const noRepeats = unicos?.every((el) => {
        return el !== e
      })
      
     if(noRepeats) {
         updateUser({...user, favorite : unicos?.concat([`${e}`])})
     } else {
      const deletes = favorite.data?.filter(el => el !== e)
  
      updateUser({...user, favorite : deletes})
     }
  
  
    }
   
  
  return (
    <>

<Box  >
        
        <Grid container flex={8} p={2}   >
      
    
      

    { Array.isArray(currentComment) && currentComment?.map(el => (
        <Grid xs={12} md={6} lg={4} p={2}   display='flex' justifyContent='center'  >
        <Card key={el._id} sx={{ maxWidth: 345, maxHeight: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={el.image}
        alt={el.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    
    </CardActionArea>
    {el._id !== undefined &&< FormControlLabel checked={isSuccess && favorite.data?.includes(el._id)}  value={el._id} onChange={()=> handleOnClick (el._id)} control={<Checkbox  icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon sx={{color:'#111'}} />} />} label="remove favorite" />}
  </Card>
  </Grid>
    ))}
     {favorite.isSuccess && Array.isArray(favorite.data) && <Pagination onChange={(event: React.ChangeEvent<unknown>, pages: number) => setCurrentPage(pages)} count={Math.ceil(favorite?.data?.length/ postPerPage) } shape="rounded" />}
 
     </Grid>
       
       </Box>
     </>
  )
 
}

export default CardsFavorite