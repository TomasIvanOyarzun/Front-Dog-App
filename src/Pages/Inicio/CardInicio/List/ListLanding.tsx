
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HeightIcon from '@mui/icons-material/Height';
import PetsIcon from '@mui/icons-material/Pets';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import WhatshotIcon from '@mui/icons-material/Whatshot';



const ListLanding = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
    <ListItem >
      <ListItemAvatar>
        <Avatar>
          <PetsIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Breed Name" secondary="Indicate the name of the breed" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <AddPhotoAlternateIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Photo" secondary="add a picture of the breed" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
        <HeightIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Dog Size" secondary="specify width and height" />
    </ListItem>

    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <WhatshotIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="temperaments" secondary="indicate the temperament of the breed" />
    </ListItem>


  </List>
  )
}

export default ListLanding