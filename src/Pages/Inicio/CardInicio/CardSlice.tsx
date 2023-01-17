const imageArray = [ 'https://cdn2.thedogapi.com/images/dW5UucTIW.jpg',
'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg','https://cdn2.thedogapi.com/images/A09F4c1qP.jpg',
'https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg']
import Carousel from 'better-react-carousel'


const CardSlice = () => {
  
    


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