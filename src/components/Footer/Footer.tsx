import React from 'react'
import { Box, Stack, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.gif'
import logo from '../../images/fetchDog.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import DraftsIcon from '@mui/icons-material/Drafts';
import GoogleIcon from '@mui/icons-material/Google';
import PublicIcon from '@mui/icons-material/Public';
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const array = [{name : 'React', image : 'https://nextsoftware.io/files/images/logos/main/reactjs-logo.png'}, {name : 'Redux Toolkit' , image : 'https://miro.medium.com/max/800/1*x2Y1VlQTzujsU48Lz9g2wg.jpeg'},
 {name : 'Typescript', image: 'data:image/png;base64,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' },
 ]

const arrayLogo = [{name : 'Material UI' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYelb8ke2XmzCMgxlOIYdd3jKGJn97sXlUBJ4gWnbjAW5GqC9sW8Yn7CXJMyzyWjodx-I&usqp=CAU'}, {name : 'JsonWebToken' , image : 'https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png'}, {name : 'Node', image: 'https://mpng.subpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg'}]
const Footer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems:'center', width: '100%', height: '100%' , maxHeight: '100%' , background: '#111', color: '#fff'}}>
          <Container >
           <Grid container>

        
   
          
           <Grid item xs={12}  md={4} lg={4}>
    
                <Box marginBottom= '30px' marginTop='30px'  >
                    <img src={logo} width="170px" />
                    <Box width='20%' height='3px' bgcolor='#64BE43'></Box>
                    <Stack>
                      <Typography margin='10px' color='#cccccc' fontSize='13px'>123 Fake Streett, here is no address,
                      this web page is fictitious.</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', margin: '8px' }}>
                              <GitHubIcon fontSize='large' sx={{marginRight: '10px'}}/>
                              <LinkedInIcon fontSize='large' sx={{marginRight: '10px'}}/>  
                              <GoogleIcon fontSize='large' sx={{marginRight: '10px'}}/>  
                            </Box>

                            
                    </Stack>
                </Box>
                
                  </Grid>
            
  
            
             <Grid item xs={12} md={4} lg={4}>
                <Box marginBottom= '30px' marginTop='30px' >
                    <Typography margin='10px' color='#cccccc' fontWeight='500' variant="h6" gutterBottom>technology used</Typography>
                    <Box width='28%' height='3px' bgcolor='#64BE43'></Box>
                      <Box sx={{display: 'flex',}}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap'}} >
                         <Stack>
                          {array.map(el => (
                            <Box sx={{display: 'flex', alignItems: 'center', margin: '8px'}}>
                                 <Avatar alt="Remy Sharp" src={el.image} />
                                 <Typography  color='#cccccc' fontSize='13px' sx={{paddingLeft: '4px'}}>{el.name}</Typography>
                            </Box>
                          ))}
                          </Stack>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap'}} >
                         <Stack >
                          {arrayLogo.map(el => (
                            <Box sx={{display: 'flex', alignItems: 'center', margin: '8px'}}>
                                 <Avatar alt="Remy Sharp" src={el.image} />
                                 <Typography  color='#cccccc' fontSize='13px'   sx={{paddingLeft: '4px'}} fontWeight= '100'>{el.name}</Typography>
                            </Box>
                          ))}
                          </Stack>
                      </Box>
                      </Box>
                     
                </Box>
                </Grid>

                


                  <Grid item xs={12}  md={4} lg={4}>
                <Box marginBottom= '30px' marginTop='30px'  >
                   <Typography margin='10px' color='#cccccc'  fontWeight='500' variant="h6" gutterBottom>All routes on the page</Typography>
                    <Box width='20%' height='3px' bgcolor='#64BE43'  ></Box>
                    <Stack sx={{marginTop:'10px'}}>
                     {['Inicio', 'Home | Cards', 'Register', 'About the page'].map(el => (
                       <Typography color='#cccccc' fontSize='13px'  sx={{paddingLeft: '4px', marginBottom: '4px'}}>{el}</Typography>
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