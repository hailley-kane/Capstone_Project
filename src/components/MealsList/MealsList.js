import React from "react";

const MealsList = ({meals, deleteMealHandler}) =>{

    
    return(
        <div className = "meals_container_wrapper">
            {meals.map((meals,index)=>(
                <div key = {index} className = "meals_container_wrapper_inner">
                    <div>
                        {`${meals.mealName} : ${meals.calories}`}
                    </div>
                    <div>
                        <button className="btn_delete_meal" onClick = {()=>deleteMealHandler(meals.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MealsList