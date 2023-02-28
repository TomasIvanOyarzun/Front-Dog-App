import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@mui/material';
import DialogComment from './DialogComment';
import { CommentResponse } from '../../../feactures/user/UserSlice';

interface Props {
   
    user: CommentResponse
}
const MenuComment = ({user} : Props) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openDialog , setOpenDialog] = React.useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
     
    
  return (
    <>
    {openDialog && <DialogComment openDialog={openDialog} setOpenDialog={setOpenDialog} user={user}/>}
    
     <IconButton  onClick={handleClick} aria-label="settings">
                    <MoreVertIcon  />
                  </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{height: '100%'}} onClick={handleClose}>
         
        <ListItemIcon  onClick={() => setOpenDialog(!openDialog)}>
            <DeleteIcon fontSize="small" />
            <Typography >Delete</Typography>
          </ListItemIcon>
          
        </MenuItem>
       
        
      </Menu>
      </>
  ) 
}

export default MenuComment