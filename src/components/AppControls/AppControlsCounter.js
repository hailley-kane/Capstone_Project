import React from "react";
//displays the total consumed calories
//displays remaining caloires 
const AppControlsCounter = ({total,remainingTotal}) => {
    return(
        <div className = "app_controls_counter">
            <h2>Total Calories: <span>{total}</span></h2>
            <h3>Remaining Calories:<span>{remainingTotal}</span></h3>
        </div>
    )
}

export default AppControlsCounter