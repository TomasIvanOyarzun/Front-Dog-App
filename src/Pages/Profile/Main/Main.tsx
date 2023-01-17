import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getUserData, useFetchCommentIdQuery, useFetchFavoriteUserFullPropertyQuery, useFetchFavoriteUserQuery } from '../../../feactures/user/UserSlice';
import ChangeImage from '../ChangeImage';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { useWidthScreen } from '../../../hooks/customHooks';
import Typography from '@mui/material/Typography';

import TableComment from './tableComment/TableComment';
const Main = () => {
  
    const {width} = useWidthScreen()
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const info = [{name : 'Name' , value : user.userName}, {name : 'Role', value : user.role}, {name : 'Email', value : user.email}, {name : 'Email verification', value : user.email_confirmed} ]
    const {data} = useFetchFavoriteUserFullPropertyQuery(user?._id)
 
    console.log(data)
   

 
     

   
  
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', width : '100%' , height :'80%' }} >
      <Grid container  >

       

        <Grid item xs={12} md={6} lg={6}  sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' , width  : width > 500 ? '80%' : '100%', flexDirection: 'column', justifyContent: 'space-between', bgcolor: '#fff', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
             <Typography color='#64BE43' fontWeight='700' variant='h4'>Perfil</Typography>
             <Box width='100%' bgcolor='#64BE43' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
             <Avatar
           alt="Remy Sharp"
           src={user?.image}
           sx={{ width: 100, height: 100, marginBottom : '20px' ,zIndex: 999  }} />
          <ChangeImage/>
             </Box>
      
              
           
         
            {info.map((el,index) => (
         <Box display='flex' flexDirection='column' width='80%'   >
            
             <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'height='60px' borderRadius='0 4px 4px 0' bgcolor={index % 2 === 0 ? '#f8f8ff' : '#FFF' }>
             <Chip sx={{marginLeft : '12px'}} label={el.name} />
                {el.name === 'Email verification' ?  <Alert variant="filled" sx={{bgcolor: '#64BE43', height: '80%'}} >
         confirmed
      </Alert> : <Chip sx={{marginRight : '12px'}} label={el.value} />
             }
              </Box>
              </Box>

              
              ))}

            
           
             </Box>

        </Grid>

      
      


       

        <Grid item xs={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center'}}>
             <Box display='flex' flexDirection='column'  alignItems='center' width= {width > 600 ? '80%' : '100%'} bgcolor='#FFF' sx={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', marginBottom: width < 1200 ? '20px' : '0px'}}>
             <Typography color='#64BE43' fontWeight='700' variant='h4'>Comments</Typography>
                   <TableComment/>
                  </Box>
                  
                
             
         </Grid>


      </Grid>
      </Box>
    </>
  )
}

export default Main