import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { userCommentId } from '../../../feactures/user/UserSlice';

interface Props {
    comment : userCommentId
}

const CardProfileComment = ({comment} : Props) => {
  return (
    <Card sx={{ maxWidth: 245 }}>
    <CardMedia
      sx={{ height: 160, maxHeight: 160 }}
      image= {comment.dog.image}
      title={comment.dog.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {comment.dog.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Comment : ${comment.comment}`}
      </Typography>
    </CardContent>
   
  </Card>
  )
}

export default CardProfileComment