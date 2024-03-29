import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import "../pages/index.css";

import Logo from '../assets/images/Logo.png';

const NavBar = () =>
{
  return (
    <Stack direction={'row'} justifyContent={'space-around'} sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px={'20px'}>
      <Link to={'/'}>
        <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack direction={'row'} gap={'40px'} fontSize={'24px'} alignItems={'flex-end'}>
        <Link to='/' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <Link to = '/CalorieTracker' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Calories</Link>
        <Link to = '/WorkoutProgress' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Progress</Link>
        <Link to = '/workouts' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Workouts</Link>
        <Link to = '/Register' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Create Account</Link>
        <Link to = '/Login' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Sign In</Link>
        <Link to = '/Quiz' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Quiz</Link>
        
       
      </Stack>
    </Stack>
  );
};

export default NavBar;
//<Link to = '/Recipe' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Recipe</Link>