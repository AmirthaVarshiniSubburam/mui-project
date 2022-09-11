import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p= {2}
    sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="block">
        <Typography variant='h6' fontWeight={100}> Online Friends</Typography>
        <AvatarGroup total={24} max={7}>
  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5731877/pexels-photo-5731877.jpeg" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3848660/pexels-photo-3848660.jpeg" />
  <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/8517921/pexels-photo-8517921.jpeg" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg" />
</AvatarGroup>
<Typography variant='h6' fontWeight={100} mt={2} mb={2}> Current Feeds</Typography>
<ImageList cols={3} rowHeight={100}>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    alt='rolls'
    />

  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
    alt='salad'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
    alt='img3'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
    alt='img4'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg"
    alt='img5'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg"
    alt='img6'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
    alt='img7'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg"
    alt='img8'
    />
    
  </ImageListItem>
  <ImageListItem>
    <img src="https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg"
    alt='img9'
    />
    
  </ImageListItem>


</ImageList>
<Typography variant='h6' fontWeight={100} mt={2} mb={2}> Latest Conversations</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
      </Box>
  )
}

export default Rightbar