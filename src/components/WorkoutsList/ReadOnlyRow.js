import React from "react";

const ReadOnlyRow = ({ workout, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
       <td>{workout.date}</td>
       <td>{workout.workout}</td>
       <td>{workout.duration}</td>
       <td>{workout.setsandreps}</td>
       <td>{workout.weight}</td>
       <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, workout)}
        >
          Edit
      </button>
      <button type="button" onClick={() => handleDeleteClick(workout.id)}>
        Delete
      </button>
    </td>
  </tr>
  );
};

export default ReadOnlyRow;