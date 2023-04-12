import React, {useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () =>
{
  const [bodyPart, setBodyPart] = useState( 'all' );
  const [exercises, setExercises] = useState( [] );

  useEffect(() => {
    fetch('/exercises')
      .then(response => response.json())
      .then(data => setExercises(data));
  }, []);

  const handleSearch = (searchParams) => {
    fetch(`/exercises?bodyPart=${searchParams.bodyPart}`)
      .then(response => response.json())
      .then(data => setExercises(data));
    setBodyPart(searchParams.bodyPart);
  };
  
  return (
    <Box class = "homepage">
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
