import React, {useState} from "react";
import AppControlsCounter from "../components/AppControls/AppControlsCounter";
import AppControlsDelete from "../components/AppControls/AppControlsDelete";
import AppControlsInput from "../components/AppControls/AppControlsInput";
import MealsList from "../components/MealsList/MealsList";
//import Quiz from "./Quiz/Quiz";

const CalorieTracker = () => {
	const[meals,setMeals] = useState([]);
	const[mealName,setMealName] = useState("");
	const[calories,setCalories] = useState(0);

	//user input - meals and calories
	const addMealsHandler = () => {
		const previousMeals = [...meals];
		const meal = {
			mealName, calories, id: Math.floor(Math.random() * 1000)
		};

		//joing meal strings together
		const newMeals = previousMeals.concat(meal);

		if(calories <=0 || mealName === "")
		{
			alert("Must not be empty");
		}
		else
		{
			setMeals(newMeals);
		}

		//setting the name of the food and the amount of calories
		setMealName("");
		setCalories(0);
	};

	//delete function for single food/meal
	const deleteMealHandler = (id) => {
		const previousMeals = [...meals];
		const newMeals = previousMeals.filter((meal)=>meal.id !==id);
		//resetting the meal
		setMeals(newMeals);
	};

	//delete all meals for the day 
	const deleteAllMeals = () =>{
		setMeals([]);
	};

	//total variable to calculate all meals throught the day
	const total = meals.map((meal)=>meal.calories).reduce((acc,value)=>acc + +value,0);
	//will need to connect to quiz for correct calories 
	//age 18, 21.5, 30, 35
	//BMR = 10W + 6.25H - 5A + 5 - men
	//BMR = 10W + 6.25H - 5A - 161 - women
	const remainingTotal = 2000-total;
	

	//getting the current date for food log
	const current = new Date();
	const date = `${current.getMonth()+1}/${current.getDate()}`;
	  		
	
return (
	<div>
		<AppControlsCounter total = {total} remainingTotal = {remainingTotal} />
		<AppControlsDelete deleteAllMeals = {deleteAllMeals}/>
		<AppControlsInput addMealsHandler = {addMealsHandler} mealName = {mealName} calories = {calories}
		setMealName = {setMealName} setCalories = {setCalories}
		/>

		<div className = "meals_container">
		<h2>List of Meals - <span>{date}</span> </h2>
			<MealsList meals = {meals} deleteMealHandler={deleteMealHandler} />
		</div>
	</div>

	
);
};

export default CalorieTracker;
