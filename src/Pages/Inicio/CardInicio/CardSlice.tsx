
import Carousel from 'better-react-carousel'


const CardSlice = () => {
  
  const imageArray = [ 'https://cdn.pixabay.com/photo/2022/10/10/04/23/rottweiler-7510724_960_720.jpg',
  'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
  'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg','https://cdn2.thedogapi.com/images/A09F4c1qP.jpg',
  'https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg']


  return (
    
    <Carousel cols={1} rows={1} gap={22} loop  >
    {imageArray.map(el => (
      <Carousel.Item >
        
      <img width="100%" height="100%"  src={el} />
    </Carousel.Item>
    ))}
   
    
  </Carousel>
  

  )
}

export default CardSlice