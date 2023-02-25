import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getUserData, useFetchFavoriteUserFullPropertyQuery, useFetchFavoriteUserQuery, useFetchUpdateUserMutation } from '../../../../feactures/user/UserSlice'
import { Checkbox, FormControlLabel } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { DogApi } from '../../../../feactures/dog/DogSlice';
import Button from '@mui/material/Button';

interface Props {
  dog: DogApi
}
const CardsFavorite = ({dog} : Props) => {

    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const [currentPage , setCurrentPage] = React.useState(1)
   const [updateUser] = useFetchUpdateUserMutation()
    const {data, isError , isSuccess} = useFetchFavoriteUserFullPropertyQuery(user?._id)
    const favorite = useFetchFavoriteUserQuery(user?._id)

    
  
  


    const handleOnClick = (e : string | undefined) => {
      
         

      
       if(e !== undefined) {
        const deletes = favorite.data?.filter(el => el !== e)
  
         updateUser({...user, favorite : deletes})
       }
  
  
  
    }
   
  
  return (
    <>


        <Card key={dog._id} sx={{width : 345 , maxWidth: 345, maxHeight: 445 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={dog.image}
        alt={dog.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {dog.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    
    </CardActionArea>
    <Button onClick={() => handleOnClick (dog._id)} variant="outlined" startIcon={<DeleteIcon />} sx={{border: '1px solid #004d40', color: '#004d40', margin: '10px'}}>
        Delete
      </Button>
    
  </Card>

     </>
  )
 
}

export default CardsFavorite