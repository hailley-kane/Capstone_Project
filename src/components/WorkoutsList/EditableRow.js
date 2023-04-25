import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
            type = "date"
            name = "date"
            required = "required"
            placeholder = "Enter the date..."
            value={editFormData.date}
            onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
            type = "text"
            name = "workout"
            required = "required"
            placeholder = "Enter the workout..."
            value={editFormData.workout}
            onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
            type = "text"
            name = "duration"
            required = "required"
            placeholder = "Enter the duration..."
            value={editFormData.duration}
            onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
            type = "text"
            name = "setsandreps"
            required = "required"
            placeholder = "Enter the sets and reps..."  
            value={editFormData.setsandreps}
            onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
            type = "text"
            name = "weight"
            required = "required"
            placeholder = "Enter the weight..."
            value={editFormData.weight}
            onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;