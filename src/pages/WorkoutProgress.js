import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import "./WorkoutProgressControls/WorkoutProgress.css";
import data from "./WorkoutProgressControls/WorkoutProgressData.json";
import ReadOnlyRow from "../components/WorkoutsList/ReadOnlyRow";
import EditableRow from "../components/WorkoutsList/EditableRow";

const WorkoutProgress = () => {
  const[workouts, setWorkouts] = useState(data);
  const[addFormData, setAddFormData] = useState({
    date: "",
    workout: "",
    duration: "",
    setsandreps: "",
    weight: "",
  });

  const[editFormData, setEditFormData] = useState({
    date: "",
    workout: "",
    duration: "",
    setsandreps: "",
    weight: "",
  });

  const [editWorkoutId, setEditWorkoutId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit =  (event) => {
    event.preventDefault();
    
    const newWorkout = {
      id: nanoid(),
      date: addFormData.date,
      workout: addFormData.workout,
      duration: addFormData.duration,
      setsandreps: addFormData.setsandreps,
      weight: addFormData.weight,
    };

    const newWorkouts = [...workouts, newWorkout];
    setWorkouts(newWorkouts);
  };

  const handleEditFormSubmit =  (event) => {
    event.preventDefault();
    
    const editedWorkout = {
      id: editWorkoutId,
      date: editFormData.date,
      workout: editFormData.workout,
      duration: editFormData.duration,
      setsandreps: editFormData.setsandreps,
      weight: editFormData.weight,
    };

    const newWorkouts = [...workouts];
    
    const index = workouts.findIndex((workout) => workout.id === editWorkoutId);

    newWorkouts[index] = editedWorkout;

    setWorkouts(newWorkouts);
    setEditWorkoutId(null);
  };

  const handleEditClick = (event, workout) => {
    event.preventDefault();
    setEditWorkoutId(workout.id);

    const formValues = {
      date: workout.date,
      workout: workout.workout,
      duration: workout.duration,
      setsandreps: workout.setsandreps,
      weight: workout.weight,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditWorkoutId(null);
  };

  const handleDeleteClick = (workoutId) => {
    const newWorkouts = [...workouts];

    const index = workouts.findIndex((workout) => workout.id === workoutId);

    newWorkouts.splice(index, 1);

    setWorkouts(newWorkouts);
  };

  return (
    <div className = "workoutProgressTable">
      <form onSubmit={handleEditFormSubmit}>  
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout</th>
              <th>Duration</th>
              <th>Sets And Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <Fragment>
                { editWorkoutId === workout.id ? (
                  <EditableRow
                    editFormData = {editFormData}
                    handleEditFormChange = {handleEditFormChange}
                    handleCancelClick = {handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    workout={workout}
                    handleEditClick = {handleEditClick}
                    handleDeleteClick = {handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add A Workout</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
        type = "date"
        name = "date"
        required = "required"
        placeholder = "Enter the date..."
        onChange={handleAddFormChange}
        />
        <input
        type = "text"
        name = "workout"
        required = "required"
        placeholder = "Enter the workout..."
        onChange={handleAddFormChange}
        />
        <input
        type = "text"
        name = "duration"
        required = "required"
        placeholder = "Enter the duration..."
        onChange={handleAddFormChange}
        />
        <input
        type = "text"
        name = "setsandreps"
        required = "required"
        placeholder = "Enter the sets and reps..."        
        onChange={handleAddFormChange}
        />
        <input
        type = "text"
        name = "weight"
        required = "required"
        placeholder = "Enter the weight..."
        onChange={handleAddFormChange}
        />
        <button type = "submit">Add</button>
      </form>
    </div>
  );
};

export default WorkoutProgress;