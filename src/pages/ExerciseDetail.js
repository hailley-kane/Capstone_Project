import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

const ExerciseDetail = () => {

//use to connect to backend
  /*useEffect(() => {
    fetch(http://localhost:5000/exercises/${id})
    .then(res => res.json())
    .then(data => setExercise(data))
    .catch(err => console.error(err));
    }, [id]); */
  return (
    <div>
      ExcerciseDetail
    </div>
  )
}

export default ExerciseDetail
