import React from 'react'
import { CommentResponse, getUserData,  useFetchCommentsQuery, useFetchGetLikeQuery, useFetchPostLikeMutation, useFetchRemoveLikeMutation, useFetchUpdateCommentMutation } from '../../../feactures/user/UserSlice'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommentLogin from './CommentLogin';
import Checkbox from '@mui/material/Checkbox';
import { responsePostLike } from '../../../feactures/user/UserSlice';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MenuComment from './MenuComment'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/toolkitHooks';


const sortCommentForCurretnUser = (array : Array<CommentResponse> , currentName : string) => {
  const currentUser  = [] as CommentResponse[]
  const comments = [] as CommentResponse[]
  
  array.forEach((el) => {
    if(el.user.name === currentName) currentUser.push(el)
     else comments.push(el)
  })
   
  return [...currentUser , ...comments]
}


const Comment  = () => {
  
  const {id} = useParams()
  //  son todos los comentarios de esta ruta
    const {data, isError, isSuccess} = useFetchCommentsQuery(id)


    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    // Delete de Like

    // remueve el like en la bdd
   // a removeLike() le paso por paramentro este tipo {comment : referencia al comentario , likeUser : referencia al user }
    const [removeLike] = useFetchRemoveLikeMutation()
   //guardo en un state todos los likes 
    const [comments, setComment] = React.useState<CommentResponse[]>();
    
   // aumento + 1 o descuento - 1  en la bdd 
    const [updateComment] = useFetchUpdateCommentMutation()
    // creo el like en la bdd
    // a createLike() le paso por paramentro este tipo : {comment : referencia al comentario , likeUser : referencia al user } 
    const [createLike] = useFetchPostLikeMutation()
     
     // obtengo todos los lokes de los usuarios bdd
     // getLike es de tipo : {comment : referencia al comentario , likeUser : referencia al user } array
    const getLike = useFetchGetLikeQuery(null)
    
    const active = useAppSelector(el => el.user.active)

     // manejar los likes al darle click 
     const handleLikeClick = (comment: CommentResponse) => {
      const likedComment = getLike?.data?.find(el => el.comment === comment._id && el.likeUser === user._id);
     
      const likedByCurrentUser = likedComment?.likeUser === user._id;
        
      
      if(likedByCurrentUser) {
     
        removeLike(likedComment._id as string);
        const subtract1Like = {
          _id : comment._id,
          dog : comment.dog,
          user : comment.user?._id,
          comment : comment.comment,
          like : comment.like  - 1,
          exits : true
        };
        updateComment(subtract1Like);
      } else {
        
        createLike({ likeUser : user._id, comment : comment._id  as string});
        const add1Like = {
          _id : comment._id,
          dog : comment.dog,
          user : comment.user?._id,
          comment : comment.comment,
          like : comment.like + 1,
          exits : true
        };
        updateComment(add1Like);
      }
    };
    
    
    
 React.useEffect(() => {
 
     if(isSuccess) {
 
      setComment(sortCommentForCurretnUser(data, user?.name))
      console.log('entro adentro')
     }
     console.log('entro afuera')
 },[ data,active])

    
  

  return (
   
     <>  

     <Box sx={{width: '100%', padding: '40px'}}>
        <Typography  variant="subtitle1" gutterBottom color='#632876'>{isError ?   0 : data?.length} comentarios</Typography>
       {localStorage.getItem('user') && <CommentLogin/>}
       {comments?.map((el,index) => (
          <Stack key={index} direction="row" spacing={2} marginBottom='8px'>
             <Avatar src={el.user.image} />
             <Box width='100%' display='flex' flexDirection='column'>
               <Typography sx={{fontWeight: 'bold'}}>{el.user.name}</Typography>
               <Box sx={{ width:'100%', display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant="body1" gutterBottom>{el.comment}</Typography>
                  { user?._id === el.user._id && <MenuComment   user={el}/> }
               </Box>
              
               <FormGroup>
              
                  <FormControlLabel checked={getLike.data?.some(element => element.likeUser === user?._id && element.comment === el._id)} disabled={user ? false : true}  onClick={() => handleLikeClick(el)}  control={  <Checkbox color='secondary'  icon={<ThumbUpAltIcon/>} checkedIcon={<ThumbUpAltIcon />} />} label={el.like} />
    
               </FormGroup>
                </Box>
 
            </Stack>
               ))} 
      </Box>
     </>
  )
  
}

export default Comment