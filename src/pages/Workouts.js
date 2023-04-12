import { useEffect, useState } from 'react';
import {Box, Stack, Typography} from '@mui/material';
import "../workouts.json"



//I have this set up right now so that we can display their workout routine for each day of the week for whatever their plan may be. Underneath that it should show alternative options
//for them. Peoples plans/goals change so they should have a way to evaluate whats best for them.
//allow connection to database/backend
/*const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/workouts')
      .then(res => res.json())
      .then(data => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
*/
const Workouts = () => {

    const workouts = require('../workouts.json');
    console.log(workouts);

    const keys = Object.keys(workouts);
    const randIndexOne = Math.floor(Math.random() * keys.length);
    const randKeyOne = keys[randIndexOne];
    const currentPlan = workouts[randKeyOne];
    console.log(currentPlan);

    const randIndexTwo = Math.floor(Math.random() * keys.length);
    const randIndexThree = Math.floor(Math.random() * keys.length);
    const randIndexFour = Math.floor(Math.random() * keys.length);
    
    const randKeyTwo = keys[randIndexTwo];
    const randKeyThree = keys[randIndexThree];
    const randKeyFour = keys[randIndexFour];
    
    

    

//will eventually display the users current workout plan for the week and give them a random set of alternative options for plans
//wokring on figuring out how to format and display the workout plans in the appropriate boxes at this time. 
    return (
        <Box id='workouts' sx={{mt: {lg: '109px'}, position: 'relative', height: '2000', width: '100%'}} mt={'50px'} p={'20px'} justifyContent={'center'}>
            <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='20px' textAlign = {'center'}>
                Your Workouts
            </Typography>
            <Stack direction={'row'} sx={{gap: {lg: '15px', xs: '50px'}}} flexWrap={'wrap'} justifyContent={'center'} mb = '100px'>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px',backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Monday:
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Tuesday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Wednesday:<br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Thursday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Friday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Saturday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Sunday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                    </Typography>
                </Box>
            </Stack>
            <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='20px' textAlign = {'center'}>
                Explore New Plans!
            </Typography>
            <Stack direction={'row'} sx={{gap: {lg: '13px', xs: '50px'}}} flexWrap={'wrap'} justifyContent={'center'}>
                <Box sx={{position: 'relative', width: '20%', height: '250px', p: '20px', backgroundColor: 'white', borderRadius: '20px',  borderStyle: 'groove', cursor: 'pointer'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {randKeyTwo} <br /><br/>
                        {workouts[randKeyTwo]['Summary']}
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '20%', height: '250px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove', cursor: 'pointer'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {randKeyThree}<br /><br/>
                        {workouts[randKeyThree]['Summary']}
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '20%', height: '250px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove', cursor: 'pointer'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {randKeyFour}<br /><br/>
                        {workouts[randKeyFour]['Summary']}
                    </Typography>
                </Box>
            </Stack>
        </Box>

    )
  }
  
  export default Workouts