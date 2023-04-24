import React from "react";

const AppControlsInput = ({addMealsHandler,calories,mealName,setCalories,setMealName}) => {
    //button to add meals to log
    const onAddMealsClick = () =>{
        addMealsHandler();
    };
    //user input of meal (text) and calories (number)
    return(
        <div className = "app_controls">
            <div className="app_controls_inputs">
                <h3>Enter food and calories</h3>
            <input type = "text" placeholder = "Meal" value = {mealName} onChange={(e) => setMealName(e.target.value)} />
            <input type = "number" placeholder="Calories" value={calories} onChange={(e)=> setCalories(e.target.value)} min = {0}/>
            <button onClick={onAddMealsClick}>Add Meal</button>
            </div>
        </div>
    )
}

export default AppControlsInput