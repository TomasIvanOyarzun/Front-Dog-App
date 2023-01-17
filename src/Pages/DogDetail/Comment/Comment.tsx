import React, { Component } from 'react'
import { CommentResponse, commentResponse,  getUserData, updatingComment, useFetchAllUserQuery, useFetchCommentsQuery, useFetchGetLikeQuery, useFetchPostLikeMutation, useFetchRemoveLikeMutation, useFetchUpdateCommentMutation } from '../../../feactures/user/UserSlice'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommentLogin from './CommentLogin';
import Checkbox from '@mui/material/Checkbox';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MenuComment from './MenuComment'
import { useParams } from 'react-router-dom';


interface IlikeComennts {
  user : string
  comment : string
}

const Comment  = () => {
  
  const {id} = useParams()
  //  son todos los comentarios de esta ruta
    const {data, isError, isSuccess} = useFetchCommentsQuery(id)


    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    // Delete de Like
    const [removeLike] = useFetchRemoveLikeMutation()
    const [likedComments, setLikedComments] = React.useState<IlikeComennts[]>( JSON.parse(localStorage.getItem("likedComments") || "[]"));
  
    const [updateComment] = useFetchUpdateCommentMutation()
    const [createLike] = useFetchPostLikeMutation()
    const getLike = useFetchGetLikeQuery(null)
 
  

    const handleLikeClick = (comment: CommentResponse) => {
       if(user) {
        if (likedComments.some(el => el.comment === comment._id && el.user === comment.user._id )) {
          setLikedComments(likedComments.filter(item => item.user !== comment.user._id || item.comment !== comment._id  ));
         
          const subtract1Like = {
            _id : comment._id,
            dog : comment.dog,
            user : comment.user?._id,
            comment : comment.comment,
            like : comment.like  - 1,
             exits : true}
  
           updateComment(subtract1Like)
            
           const idElementToDelete = getLike?.data?.find(el => el.likeUser === user._id && el.comment === comment._id)
               
           if(idElementToDelete !== undefined && idElementToDelete._id !== undefined) removeLike(idElementToDelete._id)
              
  
        }  else {
          if(comment.user._id !== undefined && comment._id !== undefined && getLike.data !== undefined) {
            setLikedComments([...likedComments, {user : comment.user._id , comment: comment?._id}]);
          const add1Like = {
            _id : comment._id,
            dog : comment.dog,
            user : comment.user?._id,
            comment : comment.comment,
            like : comment.like + 1,
             exits : true }
  
            updateComment(add1Like)
  
          
            const hasCommonElements = getLike?.data.some(element1 => element1.likeUser === comment.user._id && element1.comment === comment._id);
             if (!hasCommonElements) {
              createLike({ likeUser : user._id, comment : comment._id })
             }         
        }
          }
       }
    };

    React.useEffect(() => {
      localStorage.setItem("likedComments", JSON.stringify(likedComments));
    }, [likedComments]);
      
    console.log(getLike.data)

  return (
   
     <>  

     <Box sx={{width: '100%', padding: '40px'}}>
        <Typography variant="subtitle1" gutterBottom color='#1976d2'>{isError ?   0 : data?.length} comentarios</Typography>
       {localStorage.getItem('user') && <CommentLogin/>}
       {isSuccess && isError === false && data?.map((el,index) => (
          <Stack key={index} direction="row" spacing={2} marginBottom='8px'>
             <Avatar src={el.user.image} />
             <Box width='100%' display='flex' flexDirection='column'>
               <Typography sx={{fontWeight: 'bold'}}>{el.user.name}</Typography>
               <Box sx={{ width:'100%', display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant="body1" gutterBottom>{el.comment}</Typography>
                  { user?._id === el.user._id && <MenuComment   user={el}/> }
               </Box>
              
               <FormGroup>
              
                  <FormControlLabel disabled={user ? false : true}  onClick={() => handleLikeClick(el)}  control={  <Checkbox  icon={<ThumbUpAltIcon/>} checkedIcon={<ThumbUpAltIcon />} />} label={el.like} />
    
               </FormGroup>
                </Box>
 
            </Stack>
               ))} 
      </Box>
     </>
  )
  
}

export default Comment