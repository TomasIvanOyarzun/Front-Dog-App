import React from 'react'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ChangeImage from '../../../Pages/Profile/ChangeImage';
import Button from '@mui/material/Button';
import { Temperaments, useFetchDogsPostMutation, useFetchTemperamentsQuery } from '../../../feactures/dog/DogSlice';
import { useAppSelector } from '../../../hooks/toolkitHooks';
import Avatar from '@mui/material/Avatar';
import HeightIcon from '@mui/icons-material/Height';
import PetsIcon from '@mui/icons-material/Pets';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AlertText from '../../AlertText/AlertText';
import Typography from '@mui/material/Typography';
import { errorInput } from './controlForm';
import { useWidthScreen } from '../../../hooks/customHooks';
import LoadingButton from '@mui/lab/LoadingButton'

import Alert from '@mui/material/Alert';

import SendIcon from '@mui/icons-material/Send';
import { ErrorResponse } from '@remix-run/router';
  const initialState = {
    name : '',
    minHeight : '',
    maxHeight : '',
    height : '',
    minWeight : '',
    maxWeight : '',
    weight : '',
    minLife_span : '',
    maxLife_span : '',
    life_span : '',
    image : '',
    temperament : [] as Temperaments[] 
  }

  const initialState2= {
    name : '',
    minHeight : '',
    maxHeight : '',
    height : '',
    minWeight : '',
    maxWeight : '',
    weight : '',
    minLife_span : '',
    maxLife_span : '',
    life_span : '',
    image : '',
    temperament : ''
  }


const Form = () => {

   
    const [dog , setDog] = React.useState(initialState)
    const {data, isSuccess} = useFetchTemperamentsQuery('')
    const [loading, setLoading] = React.useState(false)
    const imageUrl = useAppSelector(state => state.user.imageUrl)
     const [errors, setError] = React.useState(initialState2)
    const [value, setValue] = React.useState<Temperaments[]>([{ _id: '63a7f3f463c8f5f1d27890a8', name: 'Active'}]);
    const [postDogSave, resData] = useFetchDogsPostMutation()
   
    const {width} = useWidthScreen()
    const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setDog({
                ...dog,
                [e.target.name] : e.target.value,
                temperament : value
                
            })

            setError(errorInput({
                ...dog, [e.target.name]: e.target.value
              }))
    }
    const handleOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        
        const dogPost = {
            name : dog.name,
            height : `${dog.minHeight} - ${dog.maxHeight}`,
            weight :  `${dog.minWeight} - ${dog.maxWeight}`,
            life_span : `${dog.minLife_span} - ${dog.maxLife_span}`,
            temperament : value.map(el => el.name),
            image : imageUrl
        }
         
      
        setLoading(true)
       setTimeout(() => {
        setLoading(false)
        postDogSave(dogPost)
       },1000)
     
        
        setDog(initialState)
        setValue([])
        
    }

   console.log(JSON.stringify(resData?.data?.error.data))
  return (
  <>    
       {resData.isError === false && resData.isSuccess === true && <AlertText msg='it was created correctly'/>}
       {resData.error  &&   <Alert variant="filled" severity="error">{JSON.stringify(resData?.data?.error.data)}</Alert>}
    <Box >
    <form onSubmit={handleOnSubmit} style={{display:'flex', flexWrap:'wrap', width:'100%', justifyContent:'center'}}>
<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '85%' }} variant="outlined">
 <OutlinedInput
    error= {errors.name.length > 0}
   name = 'name'
   onChange={handleOnChange}
   value = {dog.name}
   endAdornment={<InputAdornment position="end">Dog</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'name',
   }}

   startAdornment={
    <InputAdornment position="start">
      <PetsIcon />
    </InputAdornment>
  }
 />
 {errors.name.length > 0 ?<Typography color='red' fontWeight='100'>{errors.name}</Typography> : <FormHelperText id="outlined-weight-helper-text">breed name</FormHelperText>}
 
</FormControl>

<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '40%' }} variant="outlined">
 <OutlinedInput
 error= {errors.minHeight.length > 0}
 type='number'
   name='minHeight'
   onChange={handleOnChange}
   value = {dog.minHeight}
  
   endAdornment={<InputAdornment position="end">Height</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'weight',
   }}
   startAdornment={
    <InputAdornment position="start">
      <HeightIcon />
    </InputAdornment>
  }
 />
 {errors.minHeight.length > 0 ?<Typography color='red'>{errors.minHeight}</Typography> : <FormHelperText id="outlined-weight-helper-text">Minimun height</FormHelperText>}

</FormControl>


<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '40%' }} variant="outlined">
 <OutlinedInput
 type='number'
 error= {errors.maxHeight.length > 0}
   name='maxHeight'
   onChange={handleOnChange}
   value = {dog.maxHeight}
   endAdornment={<InputAdornment position="end">Height</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'weight',
   }}


   startAdornment={
    <InputAdornment position="start">
      <HeightIcon />
    </InputAdornment>
  }
 />
 {errors.maxHeight.length > 0 ? <Typography color='red'>{errors.maxHeight}</Typography> : <FormHelperText id="outlined-weight-helper-text">Maximun height</FormHelperText>}
</FormControl>

<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '40%' }} variant="outlined">
 <OutlinedInput
 error={errors.minWeight.length > 0}
 type='number'
   name='minWeight'
   onChange={handleOnChange}
   value = {dog.minWeight}
   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'weight',
   }}
   startAdornment={
    <InputAdornment position="start">
      <MonitorWeightIcon />
    </InputAdornment>
  }
 />
 {errors.minWeight.length > 0 ? <Typography color='red'>{errors.minWeight}</Typography> : <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>}
 
</FormControl>


<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '40%' }} variant="outlined">
 <OutlinedInput
 type='number'
 name='maxWeight'
 error={errors.maxWeight.length > 0}
 onChange={handleOnChange}
 value = {dog.maxWeight}
   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'weight',
   }}
   startAdornment={
    <InputAdornment position="start">
      <MonitorWeightIcon />
    </InputAdornment>
  }
 />
 {errors.maxWeight.length > 0 ? <Typography color='red'>{errors.maxWeight}</Typography> : <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>}

</FormControl>

<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '40%' }} variant="outlined">
 <OutlinedInput
 type='number'
 error={errors.minLife_span.length > 0}
 name='minLife_span'
 onChange={handleOnChange}
 value = {dog.minLife_span}
   endAdornment={<InputAdornment position="end">life</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'weight',
   }}

   startAdornment={
    <InputAdornment position="start">
      <MonitorHeartIcon />
    </InputAdornment>
  }
 />
  {errors.minLife_span.length > 0 ? <Typography color='red'>{errors.minLife_span}</Typography> : <FormHelperText id="outlined-weight-helper-text">life span</FormHelperText>}
 
</FormControl>


<FormControl sx={{ m: 1, width: width < 400 ? '100%' : '40%' }} variant="outlined">
 <OutlinedInput
 type='number'
 name='maxLife_span'
 error={errors.maxLife_span.length > 0}
 onChange={handleOnChange}
 value = {dog.maxLife_span}
   endAdornment={<InputAdornment position="end">life</InputAdornment>}
   aria-describedby="outlined-weight-helper-text"
   inputProps={{
     'aria-label': 'weight',
   }}
   startAdornment={
    <InputAdornment position="start">
      <MonitorHeartIcon />
    </InputAdornment>
  }
 />
  {errors.maxLife_span.length > 0 ? <Typography color='red'>{errors.maxLife_span}</Typography> : <FormHelperText id="outlined-weight-helper-text">life span</FormHelperText>}

</FormControl>
{isSuccess && data !== undefined &&
  <Autocomplete
  multiple
  id="fixed-tags-demo"
  value={value}
  onChange={(event, newValue) => {

    setValue([
       
      ...newValue,
     
    ]);
  }}
  options={data}
  getOptionLabel={(option) => option.name}
  renderTags={(tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Chip
        label={option.name}
        {...getTagProps({ index })}
       
       
      />
    ))
  }
  style={{ width: 500 }}
  renderInput={(params) => (
    <TextField {...params} label="temperament" placeholder="select temperament" />
    
  )}
/>

}
{errors.temperament.length > 0  && <Typography color='red'>{errors.temperament}</Typography> }

 <Box margin='22px' display='flex' flexDirection='column' justifyContent='space-evenly' width='100%' marginTop='20px' alignItems='center' >

 {imageUrl.length > 0 ? <Avatar sx={{width: '80px', height: '80px', marginBottom: '12px'}} src={imageUrl} alt='dog-image'></Avatar>
  : <Avatar sx={{width: '70px', height: '70px', marginBottom: '12px' }}  alt='dog-image'>Photo</Avatar> 

}
<ChangeImage/> 
 </Box>



<LoadingButton sx={{ width: '50%', backgroundColor: '##58f09b', backgroundImage: 'linear-gradient(45deg, #58f09b 0%, #06812f 100%)', border: 'none', color: '#fff', fontWeight: 'bold', boxShadow: 'none'}}
         disabled={Object.values(errors).join('').length > 0 ? true : false || Object.values(dog).join('').length > 0 ? false : true}
          type='submit'
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>

</form>
</Box>
</>
  
  )
}

export default Form