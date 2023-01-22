
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import React from 'react'
import { getUserData,  imageUrlUser,  useFetchFavoriteUserFullPropertyQuery, useFetchUpdateUserMutation} from '../../../feactures/user/UserSlice';
import ChangeImage from '../ChangeImage';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';

import { useWidthScreen } from '../../../hooks/customHooks';
import Typography from '@mui/material/Typography';

import TableComment from './tableComment/TableComment';
import { useAppSelector } from '../../../hooks/toolkitHooks';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ChangePassword from './changePassword/ChangePassword';
import Snackbar from '@mui/material/Snackbar';
import { green } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const Main = () => {
  
    const {width} = useWidthScreen()
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const info = [{name : 'Name' , value : user.name}, {name : 'Role', value : user.role}, {name : 'Email', value : user.email}, {name : 'Email verification', value : user.email_confirmed} ]
    const {data} = useFetchFavoriteUserFullPropertyQuery(user?._id)
    const [open , setOpen] = React.useState(false)
    const [updateUser] = useFetchUpdateUserMutation()
   const imageUser = useAppSelector(state => state.user.imageUrlUser)
    
  const [openMsg , setOpenMsg] = React.useState(false)

  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClick = () => {
    setOpenSnack(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

   React.useEffect(() => {

     if(imageUser.length > 0) {
      
      updateUser({...user, image: imageUser}).unwrap().then(response => {
        localStorage.setItem('user', JSON.stringify({...response}))
        setOpenMsg(true)
        setOpenSnack(true);
      }
        ).catch(error => console.log(error))
       
     }
   },[imageUser])
   

 
     

   

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', width : '80%' , height :'80%'}} >
    
   
 
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' , width  : '100%' }}>
          <Grid container spacing={2}>
           <Grid item xs={12}>
          { openMsg &&  <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}> 
       <Alert  onClose={handleClose} variant="filled" severity="success" sx={{background: green[500]}}>
       the image was successfully updated in your account</Alert>
           </Snackbar>}
         
             <Typography color='#004d40' fontWeight='500' variant='h3'>Hi {user?.name.toUpperCase()}</Typography>
             <Typography color='#607d8b' fontWeight='400' >general parameters of your profile</Typography>

             <Box width={width > 1000 ? '30%' : '100%'}  sx={{ display: 'flex', flexDirection: 'column',marginTop: width > 1000 ? '120px' : '50px'}}>
          
             <Typography color='#004d40' fontWeight='600'  variant='h4'>your user photo</Typography>
               <Box  sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
               <Avatar
                     alt="Remy Sharp"
                     src={imageUser.length > 0 ? imageUser : user.image}
                      sx={{ width: 125, height: 125, marginBottom : '20px' ,zIndex: 999  }} />
                      <Box>
                      <ChangeImage imageUrl={imageUrlUser}/>
                      <Button startIcon={<DeleteIcon/>} sx={{backgroundColor: '#FFF', border: '1px solid #b0bec5', color: '#607d8b', fontWeight: 'bold', height: '45px', boxshadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', marginTop: '8px'}} variant='contained' >Delete Photo</Button>
                      </Box>
                 
               </Box>
              
             </Box>
             <Typography color='#607d8b' fontWeight='400' >The recommended resolution for the photo is 256 x 256 px</Typography>
      
             </Grid>

             <Grid item xs={12}>
            <Box width='100%' display='flex' >
            <Grid container spacing={2} width= '100%' >
            <Grid item xs={12} md={6} lg={6} width='100%'>




            <Box width={width > 1000 ? '80%' : '100%'} display='flex' flexDirection='column' marginTop='30px' >
           
           
              {[{label : 'Name' , value : user.name},{label : 'Email' , value: user.email},{label : 'Role', value: user.role},{label : 'Status' , value : 'confirmed'},].map(el => (
                <>
                <Typography color='#607d8b' fontWeight='400' marginBottom='5px' >{el.label}</Typography>
                <Box sx={{width: width > 1000 ? '80%' : '100%' ,border: '1px solid #b0bec5 ', borderRadius: '4px', backgroundColor: 'transparent',  marginBottom:'9px', height: '45px'}} >
                  <Typography margin='8px' fontWeight='600'>{el.value}</Typography>
                </Box>
                </>
              ))}
               
            </Box>
            </Grid>
               
             <Box width={width > 1000 ? '50%' : '100%'}  display='flex' flexDirection='column' marginTop='30px'>
             <Grid item xs={12}  md={6} lg={6}  width='100%'>
              <Typography color='#004d40' fontWeight='500' variant='h3'>security</Typography>
              <Typography  color='#607d8b' fontWeight='400'>At the moment you can only change your password</Typography>
             <Button  sx={{width: '100%', margin: '5px', border: '1px solid #64BE43', color: '#64BE43' }} size="large" onClick={() => setOpen(!open)}>
          change Password
        </Button>
        {open && <Box width={'100%'}>
              <ChangePassword/>
             </Box>}
             </Grid>
            
             </Box>
             </Grid>
          
             </Box>
             </Grid>
             </Grid>
     
             </Box>

     

      
      


       

   


   
      </Box>
    </>
  )
}

export default Main