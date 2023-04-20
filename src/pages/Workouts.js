import "../workouts.json"
import {Box, Stack, Typography, Button} from '@mui/material';
import React, {useState} from "react";




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
    const keys = Object.keys(workouts);
    const values = Object.values(workouts)
    const[keyOne, setKeyOne] = useState("Maintaining Weight")
    const[keyTwo, setKeyTwo] = useState("Losing Weight")
    const[keyThree, setKeyThree] = useState("Gaining Weight")
    const[currentPlan, setCurrentPlan] = useState(workouts[keyOne])

    const onClick = (newKey) => {
        if (newKey === keyTwo){
            const tempKey = keyOne
            setKeyOne(newKey)
            setKeyTwo(tempKey)
            setCurrentPlan(workouts[keyOne])
        } else {
            const tempKey = keyOne
            setKeyOne(newKey)
            setKeyThree(tempKey)
            setCurrentPlan(workouts[keyOne])
        }
    }

    
    
    

    

//will eventually display the users current workout plan for the week and give them a random set of alternative options for plans
//wokring on figuring out how to format and display the workout plans in the appropriate boxes at this time. 
    return (
        <Stack>
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
                        {currentPlan['Monday'][0]}<br/>
                        {currentPlan['Monday'][1]}<br/>
                        {currentPlan['Monday'][2]}<br/>
                        {currentPlan['Monday'][3]}<br/>
                        {currentPlan['Monday'][4]}<br/>
                        {currentPlan['Monday'][5]}<br/>
                        {currentPlan['Monday'][6]}<br/>
                        {currentPlan['Monday'][7]}<br/>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Tuesday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {currentPlan['Tuesday'][0]}<br/>
                        {currentPlan['Tuesday'][1]}<br/>
                        {currentPlan['Tuesday'][2]}<br/>
                        {currentPlan['Tuesday'][3]}<br/>
                        {currentPlan['Tuesday'][4]}<br/>
                        {currentPlan['Tuesday'][5]}<br/>
                        {currentPlan['Tuesday'][6]}<br/>
                        {currentPlan['Tuesday'][7]}<br/>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Wednesday:<br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {currentPlan['Wednesday'][0]}<br/>
                        {currentPlan['Wednesday'][1]}<br/>
                        {currentPlan['Wednesday'][2]}<br/>
                        {currentPlan['Wednesday'][3]}<br/>
                        {currentPlan['Wednesday'][4]}<br/>
                        {currentPlan['Wednesday'][5]}<br/>
                        {currentPlan['Wednesday'][6]}<br/>
                        {currentPlan['Wednesday'][7]}<br/>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Thursday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {currentPlan['Thursday'][0]}<br/>
                        {currentPlan['Thursday'][1]}<br/>
                        {currentPlan['Thursday'][2]}<br/>
                        {currentPlan['Thursday'][3]}<br/>
                        {currentPlan['Thursday'][4]}<br/>
                        {currentPlan['Thursday'][5]}<br/>
                        {currentPlan['Thursday'][6]}<br/>
                        {currentPlan['Thursday'][7]}<br/>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Friday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {currentPlan['Friday'][0]}<br/>
                        {currentPlan['Friday'][1]}<br/>
                        {currentPlan['Friday'][2]}<br/>
                        {currentPlan['Friday'][3]}<br/>
                        {currentPlan['Friday'][4]}<br/>
                        {currentPlan['Friday'][5]}<br/>
                        {currentPlan['Friday'][6]}<br/>
                        {currentPlan['Friday'][7]}<br/>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Saturday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {currentPlan['Saturday'][0]}<br/>
                        {currentPlan['Saturday'][1]}<br/>
                        {currentPlan['Saturday'][2]}<br/>
                        {currentPlan['Saturday'][3]}<br/>
                        {currentPlan['Saturday'][4]}<br/>
                        {currentPlan['Saturday'][5]}<br/>
                        {currentPlan['Saturday'][6]}<br/>
                        {currentPlan['Saturday'][7]}<br/>
                    </Typography>
                </Box>
                <Box sx={{position: 'relative', width: '24%', height: '500px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        Sunday: <br />
                    </Typography>
                    <Typography variant='h4' fontWeight={'normal'}  color="#3A1212" sx={{fontSize: {lg: '20px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {currentPlan['Sunday'][0]}<br/>
                        {currentPlan['Sunday'][1]}<br/>
                        {currentPlan['Sunday'][2]}<br/>
                        {currentPlan['Sunday'][3]}<br/>
                        {currentPlan['Sunday'][4]}<br/>
                        {currentPlan['Sunday'][5]}<br/>
                        {currentPlan['Sunday'][6]}<br/>
                        {currentPlan['Sunday'][7]}<br/>
                    </Typography>
                </Box>
            </Stack>
            </Box>
            <Box id='workouts' sx={{mt: {lg: '109px'}, position: 'relative', height: '1000', width: '100%'}} mt={'50px'} p={'20px'} justifyContent={'center'}>
        <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='20px' textAlign = {'center'}>
                Explore New Plans!
        </Typography>
        <Stack direction={'row'} sx={{gap: {lg: '13px', xs: '50px'}}} flexWrap={'wrap'} justifyContent={'center'}>
                <Button onClick = {() => onClick(keyTwo)}sx={{position: 'relative', width: '20%', height: '250px', p: '20px', backgroundColor: 'white', borderRadius: '20px',  borderStyle: 'groove', cursor: 'pointer'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {keyTwo} <br /><br/>
                        {workouts[keyTwo]['Summary']}
                    </Typography>
                </Button>
                <Button onClick = {() => onClick(keyThree)} sx={{position: 'relative', width: '20%', height: '250px', p: '20px', backgroundColor: 'white', borderRadius: '20px', borderStyle: 'groove', cursor: 'pointer'}}>
                    <Typography variant='h4' fontWeight={'bold'} color="#3A1212" sx={{fontSize: {lg: '24px', xs: '20px'}}} mb='10px' textAlign = {'center'}>
                        {keyThree}<br /><br/>
                        {workouts[keyThree]['Summary']}
                    </Typography>
                </Button>
        </Stack>
        </Box>
        </Stack>

    )
  }
  
  export default Workouts