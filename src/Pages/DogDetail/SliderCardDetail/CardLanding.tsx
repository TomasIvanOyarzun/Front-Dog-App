import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { DogApi } from '../../../feactures/dog/DogSlice';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


interface Props {
  dog :  DogApi,
  temp : string
}


const CardLanding = ({dog, temp} : Props) => {


  return (
    <Link style={{textDecoration: 'none'}} to={`/dog/${dog._id}`}>
     <Card sx={{ maxWidth: 345 , height: '95%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={dog.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {dog.name}
        </Typography>

        <Box display='flex' flexWrap='wrap' justifyContent='space-evenly'>
       
      {dog.temperament.map((el,index) => (
        <Chip key={index} label={el} sx={{marginBottom: '3px', }} style={{backgroundColor : el === temp ? '#64BE43' : '#ECEBEB'}}  />

      ))}
      
      </Box>
      </CardContent>
    </CardActionArea>
  </Card>
    </Link>
  )
}

export default CardLanding