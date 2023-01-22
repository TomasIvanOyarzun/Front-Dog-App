
import { Box, Stack, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import logo from '../../images/fetchDog.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Link from '@mui/material/Link';
import reactIcon from '../../images/react-icon.png'
import typescriptIcon from '../../images/typescript-icon.png'
import jwtIcon from '../../images/jwt-icon.png'
import nodeIcon from '../../images/node-icon.png'
import materialIcon from '../../images/material-ui-icon.png'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
const array = [{name : 'React', image : reactIcon}, {name : 'Redux Toolkit' , image : 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png'},
 {name : 'Typescript', image: typescriptIcon },
 ]

const arrayLogo = [{name : 'Material UI' , image : materialIcon}, {name : 'JsonWebToken' , image : jwtIcon}, {name : 'Node', image : nodeIcon}]
const Footer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems:'center', width: '100%', height: '100%' , maxHeight: '100%' , background: '#111', color: '#fff' , paddingTop: '30px'}}>
          <Container >
           <Grid container>

        
   
          
           <Grid item xs={12}  md={4} lg={4}>
    
                <Box marginBottom= '30px' marginTop='30px'  >
                    <img src={logo} width="170px" />
                
                    <Stack>
                      <Typography margin='10px' color='#cccccc' fontSize='13px'>123 Fake Streett, here is no address,
                      this web page is fictitious.</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', margin: '8px' }}>
                              <GitHubIcon fontSize='large' sx={{marginRight: '10px' ,color: '#64BE43' }}/>
                              <LinkedInIcon fontSize='large' sx={{marginRight: '10px',color: '#64BE43'}}/>  
                              <GoogleIcon fontSize='large' sx={{marginRight: '10px',color: '#64BE43'}}/>  
                            </Box>

                            
                    </Stack>
                </Box>
                
                  </Grid>
            
  
            
             <Grid item xs={12} md={4} lg={4}>
                <Box marginBottom= '30px' marginTop='30px' >
                    <Typography margin='10px' color='#64BE43' fontWeight='500'  gutterBottom>technology used</Typography>
                    <Box width='28%' height='3px' bgcolor='#64BE43'></Box>
                      <Box sx={{display: 'flex',}}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap'}} >
                         <Stack>
                          {array.map((el, index) => (
                            <Box key={index} sx={{display: 'flex', alignItems: 'center', margin: '4px'}}>
                                 <Avatar alt="Remy Sharp" src={el.image} />
                                 <Typography  color='#cccccc' fontSize='13px' sx={{paddingLeft: '4px'}}>{el.name}</Typography>
                            </Box>
                          ))}
                          </Stack>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap'}} >
                         <Stack >
                          {arrayLogo.map((el, index) => (
                            <Box key={index} sx={{display: 'flex', alignItems: 'center', margin: '4px'}}>
                                 <Avatar  alt="Remy Sharp" src={el.image}  />
                                
                                 <Typography  color='#cccccc' fontSize='13px'   sx={{paddingLeft: '4px'}} fontWeight= '100'>{el.name}</Typography>
                            </Box>
                          ))}
                          </Stack>
                      </Box>
                      </Box>
                     
                </Box>
                </Grid>

                


                  <Grid item xs={12}  md={4} lg={4}>
                <Box marginBottom= '30px' marginTop='30px' >
                   <Typography margin='10px' color='#64BE43'  fontWeight='500' gutterBottom>All routes on the page</Typography>
                    <Box width='20%' height='3px' bgcolor='#64BE43'  ></Box>
                    <Stack sx={{marginTop:'10px'}}>
                     {['Inicio', 'Home | Cards', 'Register', 'About the page'].map(el => (
                       <Link href="#" fontSize='12px' underline="hover" color='#fff' marginBottom='8px'>
                       {el}
                     </Link>
                      
                     ))}
                   
                     </Stack>
                </Box>
                </Grid>
             <Box sx={{width : '100%' , height : '2px' , background : '#EAEAEA', margin: '10px'}}></Box>
             <Typography margin='20px' color='#666' fontWeight='100' fontSize='12px'>No Copyright©  | Tomas Oyarzun page 2023</Typography>
             </Grid>
           </Container>
    </Box>
  
  )
}

export default Footer