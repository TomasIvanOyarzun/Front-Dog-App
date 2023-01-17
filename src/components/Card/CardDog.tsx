import React from 'react';
import { DogApi } from '../../feactures/dog/DogSlice'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'
import { Checkbox, FormControlLabel } from '@mui/material';
import { getUserData, useFetchAuthenticateUserMutation, useFetchDataUserQuery, useFetchFavoriteUserQuery, useFetchUpdateUserMutation } from '../../feactures/user/UserSlice';
import Favorite from '@mui/icons-material/Favorite';
import { Zoom } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../hooks/toolkitHooks';
import { useWidthScreen } from '../../hooks/customHooks';

interface Props {
  dog : DogApi
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const CardDog = ({ dog } : Props) => {
  const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
  const {data, isSuccess} = useFetchFavoriteUserQuery(user?._id)
  const [expanded, setExpanded] = React.useState(false);
  const active = useAppSelector(state => state.user.active)
  const [updateUser] = useFetchUpdateUserMutation()

    const {width} = useWidthScreen()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  const handleOnClick = (e : React.SyntheticEvent<Element, Event>) => {
   

    const unicos = data?.filter((valor, indice) => {
      return data.indexOf(valor) === indice;
    })

    const noRepeats = unicos?.every((el) => {
      return el !== dog._id
    })
    
   if(noRepeats) {
       updateUser({...user, favorite : unicos?.concat([`${dog._id}`])})
   } else {
    const deletes = data?.filter(el => el !== dog._id)

    updateUser({...user, favorite : deletes})
   }


  }
 

  


  return (
    

    
    <Card sx={{ maxWidth: 345, width: 345  , boxShadow : 'rgba(0, 0, 0, 0.15) 0px 2px 8px'}}>
    
    <CardMedia
      component="img"
      height="194"
      image={dog.image}
      alt={dog.name}
      
    /> 
    <CardContent  sx={{ maxHeight: 75, height: 65 }}>
    <Typography textAlign='center' fontWeight='600' gutterBottom variant="h6" component="div" color='#666'>
          {dog.name}
        </Typography>
    
    </CardContent>
    <CardActions disableSpacing>
     
        
      
     { user !== null && <FormControlLabel checked={isSuccess && data?.includes(dog._id as string)}  value={dog._id} onChange={ handleOnClick} control={<Checkbox  icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon sx={{color:'#64BE43'}} />} />} label="Favorite" />}
    
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
       
      </ExpandMore>
      <Link style={{textDecoration: 'none'}} to={`/dog/${dog._id}`} >
          
         <Button   sx={{border : 'transparent' , bgcolor: 'transparent', boxShadow: 'none', color: '#64BE43', fontWeight: 'bold'}} >Show</Button>
          
      </Link>
    </CardActions>
    
    
  </Card>
   
  )
}

export default CardDog