import React from 'react'

import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';
import { getUserData, useFetchPostCommentMutation } from '../../../feactures/user/UserSlice';
import { useParams } from 'react-router-dom';

const initialState = {
    dog : "",
    comment : "",
    user : ""
}
const CommentLogin = () => {
    const { id} = useParams()
    const [input , setInput] = React.useState(initialState)
    const [postComment] = useFetchPostCommentMutation()
    const user : getUserData  = JSON.parse(localStorage.getItem("user") as string)
    const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setInput({
            ...input,
            
            [e.target.name] : e.target.value,
            dog :  id as string,
             user : user._id ,

          })
    }

    const handleOnsubmit = (e :  React.FormEvent<HTMLFormElement> ) => {
           e.preventDefault()
          postComment(input)
          setInput(initialState)
    }
 
  return (
    <Box sx={{ width: '100%'  }}>
     <Avatar alt="Remy Sharp" src={user?.image} />
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <form onSubmit={handleOnsubmit}>
        <FormControl variant="standard" sx={{ width: '100%', marginBottom: '20px' }} >
        
        <Input
          id="input-with-icon-adornment"
          placeholder='oh, leave a comment...'
          onChange={handleOnChange}
          name='comment'
          value={input.comment}
        />
      </FormControl>
      
      <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
           <Button type='submit' variant="contained">send comment</Button>
      </Box>
      </form>
      </Box>

      </Box>
  )
}

export default CommentLogin