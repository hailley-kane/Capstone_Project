import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz/Quiz";
import CalorieTracker from './pages/CalorieTracker';
import Workouts from "./pages/Workouts";
import WorkoutProgress from "./pages/WorkoutProgress";
//import Recipe from "./pages/recipe";
// <Route path = '/Recipe' element = {<Recipe/>}/>

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/exercise/:id' element={<ExerciseDetail />}/>
              <Route path = '/CalorieTracker' element={<CalorieTracker/>}/>
              <Route path = '/workouts' element = {<Workouts/>} />
              <Route path = '/Register' element = {<Register/>} />
              <Route path = '/WorkoutProgress' element = {<WorkoutProgress/>} />
              <Route path = '/Login' element = {<Login/>} />
              <Route path = '/Quiz' element = {<Quiz/>}/>
          </Routes>
          <Footer />
    </Box>
    
  
  )
}

export default App
