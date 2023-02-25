
import { useFetchDogsQuery } from '../../feactures/dog/DogSlice'
import MyPagination from '../../components/Pagination/MyPagination'
import CardsDog from '../../components/Card/CardsDog'
import Stack from "@mui/material/Stack";
import Filter from '../../components/Filters/Filter';
import {Grid} from "@mui/material"
import BreadcumbsHome from './BreadcumbsHome';
import { useAppSelector } from '../../hooks/toolkitHooks';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import IconDog from './IconDog';
import { getUserData } from '../../feactures/user/UserSlice';
import Spinner from '../../components/Spinner/Spinner';
const Home = () => {
  const page = useAppSelector(state => state.dogReducer.fetchDog)
    const {data} = useFetchDogsQuery(page)
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
  return (
    <Box width='100%' sx={{backgroundColor: '#FFFF'}} >
     <Container>
      <Stack p={2}><BreadcumbsHome/></Stack>
    
    <Stack direction="row" spacing={2} >
      <Grid container>
         <Grid item xs={12} md={3} lg={3}>
            <Filter /> 
          </Grid>
          <Grid item xs={12}  md={9} lg={9}>
            {data?.docs ? <CardsDog/> : <Spinner/>}
           </Grid> 
      </Grid>
    </Stack>
    {data?.docs && <MyPagination/>}

    </Container>
    {user && <IconDog/>}
    </Box>
  )
}

export default Home