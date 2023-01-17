import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material'
import { useWidthScreen } from '../../../hooks/customHooks';
const images = [
    {
      url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
      title: 'Breakfast',
      width: '20%',
    },
    {
      url: 'https://www.rd.com/wp-content/uploads/2022/01/GettyImages-912084898-e1641834261695.jpg',
      title: 'Burgers',
      width: '20%',
    },
    {
      url: 'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/08/largest-dog-breeds-great-dane.jpg',
      title: 'Camera',
      width: '20%',
    }, {
        url: 'https://www.rd.com/wp-content/uploads/2021/07/GettyImages-1263432693.jpg',
        title: 'Camera',
        width: '20%',
      }, {
        url: 'https://cdn.britannica.com/49/161649-131-5A595140/Bernese-mountain-dog-grass.jpg',
        title: 'Camera',
        width: '20%',
      }, {
        url: 'https://c4.wallpaperflare.com/wallpaper/599/712/27/german-shepherd-dogs-animal-wallpaper-preview.jpg',
        title: 'german-shepherd',
        width: '20%',
      }, {
        url: 'https://images5.alphacoders.com/667/thumb-1920-667685.jpg',
        title: 'Labrador',
        width: '20%',
      }, {
        url: 'https://c4.wallpaperflare.com/wallpaper/782/693/204/dark-dog-animals-wallpaper-preview.jpg',
        title: 'Camera',
        width: '20%',
      }, {
        url: 'https://swall.teahub.io/photos/small/83-837432_wallpaper-rottweiler-dog-autumn-walk-rottweiler-wallpaper-4k.jpg',
        title: 'Camera',
        width: '20%',
      }, {
        url: 'https://wallpaper.dog/large/5439050.jpg',
        title: 'Camera',
        width: '20%',
      }
    
    
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  
const ImageList = () => {
  const {width } = useWidthScreen()
  return (
    <Box  sx={{width : width > 1200 ? '100%' : '100%', height: '100%'}} >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        
      ))}
    </Box>
      </Box>
  )
}

export default ImageList