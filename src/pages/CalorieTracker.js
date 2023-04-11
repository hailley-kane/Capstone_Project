import React, {useState} from "react";
import AppControlsCounter from "../components/AppControls/AppControlsCounter";
import AppControlsDelete from "../components/AppControls/AppControlsDelete";
import AppControlsInput from "../components/AppControls/AppControlsInput";
import MealsList from "../components/MealsList/MealsList";

const CalorieTracker = () => {
	const[meals,setMeals] = useState([]);
	const[mealName,setMealName] = useState("");
	const[calories,setCalories] = useState(0);

	
	const addMealsHandler = () => {
		const previousMeals = [...meals];
		const meal = {
			mealName, calories, id: Math.floor(Math.random() * 1000)
		};

		const newMeals = previousMeals.concat(meal);

		if(calories <=0 || mealName === "")
		{
			alert("Must not be empty");
		}
		else
		{
			setMeals(newMeals);
		}

		setMealName("");
		setCalories(0);
	};

	const deleteMealHandler = (id) => {
		const previousMeals = [...meals];
		const newMeals = previousMeals.filter((meal)=>meal.id !==id);

		setMeals(newMeals);
	};

	const deleteAllMeals = () =>{
		setMeals([]);

	};

	const total = meals.map((meal)=>meal.calories).reduce((acc,value)=>acc + +value,0);
	
return (
	<div>
		<AppControlsCounter total = {total}/>
		<AppControlsDelete deleteAllMeals = {deleteAllMeals}/>
		<AppControlsInput addMealsHandler = {addMealsHandler} mealName = {mealName} calories = {calories}
		setMealName = {setMealName} setCalories = {setCalories}
		/>

		<div className = "meals_container">
		<h2>List of Meals </h2>
			<MealsList meals = {meals} deleteMealHandler={deleteMealHandler}/>
		</div>
	</div>

	
);
};

export default CalorieTracker;
