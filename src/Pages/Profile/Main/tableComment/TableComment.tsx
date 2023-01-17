import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getUserData, useFetchCommentIdQuery } from '../../../../feactures/user/UserSlice';
import Pagination from '@mui/material/Pagination';
import { useWidthScreen } from '../../../../hooks/customHooks';

const TableComment = () => {
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const {data, isSuccess, isError} = useFetchCommentIdQuery(user._id)
    const {width} = useWidthScreen()
    const [currentPage , setCurrentPage] = React.useState(1)
    const postPerPage = 6
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
  
  
    let currentComment = isSuccess && isError === false &&  data?.slice(indexOfFirstPost, indexOfLastPost)
  
  
  return (
    <>
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
        {isSuccess && isError === false && Array.isArray(currentComment) && currentComment?.map(el => (
          <>
            <ListItem key={el._id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={el.dog.image} />
            </ListItemAvatar>
            <ListItemText
              primary={el.dog.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                   {user.userName}
                  </Typography>
                  {` — ${el.comment}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
          
        ))}
    
  </List>
  { isSuccess && isError === false && Array.isArray(currentComment) && <Pagination onChange={(event: React.ChangeEvent<unknown>, pages: number) => setCurrentPage(pages)} count={Math.ceil(data.length/ postPerPage) } shape="rounded" />}
  </>
  )
}

export default TableComment