import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageDog = () => {
  return (
    <>
    <ImageList
    sx={{ width: 500, height: 450 }}
    variant="quilted"
    cols={4}
    rowHeight={121}
  >
    {itemData.map((item) => (
      <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
        <img
          {...srcset(item.img, 121, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>

<ImageList
sx={{ width: 500, height: 450 }}
variant="quilted"
cols={4}
rowHeight={121}
>
{itemData.map((item) => (
  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
    <img
      {...srcset(item.img, 121, item.rows, item.cols)}
      alt={item.title}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList>
</>
  )
}

export default ImageDog

const itemData = [
    {
      img: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
      title: 'Burger',
    },
    {
      img: 'https://www.campbellrivervet.com/wp-content/uploads/sites/282/2022/05/Husky-1000x650.jpg',
      title: 'Camera',
    },
    {
      img: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Shih-Tzu_01.jpg?bust=1538074574',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://media.npr.org/assets/img/2022/05/25/gettyimages-917452888-edit_custom-c656c35e4e40bf22799195af846379af6538810c-s1100-c50.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://media.wired.com/photos/636eb5510ae5a121565fd729/master/pass/WI110122_FF_ForeverDogs_2400x1350_crop.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg',
      title: 'Fern',
    },
    {
      img: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/behavior-appearance/images/pekingese-with-woman.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/11/hypoallergenicDogs-1208322430-770x533-1.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://s28489.pcdn.co/wp-content/uploads/2022/06/when-do-dogs-stop-growing.jpg.optimal.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://www.usacarry.com/wp-content/uploads/2021/10/guard-dogs-home-security.jpg',
      title: 'Bike',
      cols: 2,
    },
  ];