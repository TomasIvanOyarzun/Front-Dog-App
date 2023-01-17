import React from 'react'
import Carousel from 'better-react-carousel'
import { useFetchDogsTemperamentQuery } from '../../../feactures/dog/DogSlice'
import CardLanding from './CardLanding'

import Typography from '@mui/material/Typography';
import { useWidthScreen } from '../../../hooks/customHooks';
interface Props {
    temperaments : Array<string>
}

const randomTemperament = ( temperamentsArray : Array<string>) => {
   
    
        const rand = Math.random()*temperamentsArray.length | 0;
         const rValue = temperamentsArray[rand | 0];
        
        
       return rValue 
    

    
}
const SliderCardDetail = ({ temperaments} : Props) => {
    
   
    const [temp, setTemp] = React.useState('')
    const {data} =  useFetchDogsTemperamentQuery(temp)
   const {width} = useWidthScreen()
    React.useEffect(() => {
       setTemp(randomTemperament(temperaments))
    },[])
    
  
  return (
      <>
        <Typography fontSize={width > 500 ? '40px' : '25px'}  margin='15px' color='#111' variant="h3" fontWeight='200'>Breeds with similar temperaments <strong>{temp}</strong></Typography>
        <Carousel cols={4} rows={1} gap={10} loop >
    
    {data?.docs.map(dog => (
        <Carousel.Item>
        <CardLanding dog = {dog} temp={temp} />
      </Carousel.Item>
    ))}
    
    
  </Carousel>
      </>  
   
  )
}

export default SliderCardDetail