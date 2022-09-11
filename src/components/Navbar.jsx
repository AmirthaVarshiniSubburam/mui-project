import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography, Box, InputBase,Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const  StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const Search = styled("box")(({theme}) => ({
  backgroundColor:"white",
  padding:"0 10",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const Navbar = () => {
  const [open, setOpen]= useState(false)
  return (
    <AppBar position= "sticky">
      <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>AMIE </Typography>
      <Pets variant='h6' sx={{display:{xs:"block",sm:"none"}}}/>
      <Search> <InputBase placeholder='Search....'/> </Search>
      <Icons> 
        <Badge badgeContent={4} color="error">
  <Mail/>
</Badge>
<Badge badgeContent={2} color="error">
  <Notifications/>
  <Avatar sx={{width:30, height:30}}
   src='https://images.pexels.com/photos/6898853/pexels-photo-6898853.jpeg'
   onClick={e=>setOpen(true)}
   />
</Badge>
 </Icons>
 <UserBox>
<Avatar sx={{width:30, height:30}} src='https://images.pexels.com/photos/6898853/pexels-photo-6898853.jpeg'
onClick={e=>setOpen(true)}
/>
<Typography variant='span'> Varshini</Typography>
</UserBox>
        </StyledToolbar>
        <Menu

        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}

        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar