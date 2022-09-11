import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, ShareSharp } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
const Post = () => {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Biryani"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="400"
        image="https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg"
        alt="Chicken Biryani"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive Biryani is a perfect party dish and a fun meal to cook
          together with your guests with chiecken 65,raita and other sides.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx ={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareSharp/>
        </IconButton>
        
      </CardActions>
      
    </Card>                
  )
}

export default Post