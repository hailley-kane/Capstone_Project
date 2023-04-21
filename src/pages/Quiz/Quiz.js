import { getOverlayAlpha } from "@mui/material";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../Quiz/Quiz.css'
import {useRef, useState, useEffect} from 'react';

//Gender and age are multiple choice
const WEIGHT_REGEX = /^[0-9]{1,3}$/
const HEIGHT_REGEX = /^([0-9]{1,3})+('[0-9]{1,3})+(")$/
const LIMITATIONS_REGEX = /^[a-zA-Z]{1,23}$/;

const Quiz = () => {
    const userRef = useRef(); 
    const errRef = useRef();
    const[success, setSuccess] = useState(false);
    const[errMsg, setErrMsg] = useState('');
    //Gender 
    const [gender, setGender] = useState('');

    //Age
    const [age, setAge] = useState('');


    //Weight
    const [weight, setWeight] = useState('');
    const [validWeight, setValidWeight] = useState(false);
    const [weightFocus, setWeightFocus] = useState(false);

    //Validate weight
    useEffect(() => {
        const result = WEIGHT_REGEX.test(weight);
        console.log(result);
        console.log(weight);
        setValidWeight(result);
    }, [weight])

    //Weight Goal
    const [weightGoal, setWeightGoal] = useState('');
    const [validWeightGoal, setValidWeightGoal] = useState(false);
    const [weightGoalFocus, setWeightGoalFocus] = useState(false);

    //Validate weight goal value
    useEffect(() => {
        const result = WEIGHT_REGEX.test(weightGoal);
        console.log(result);
        console.log(weightGoal);
        setValidWeightGoal(result);
    }, [weightGoal])

    //Height
    const [height, setHeight] = useState('');
    const [validHeight, setValidHeight] = useState(false);
    const [heightFocus, setHeightFocus] = useState(false);

    //Validate Height value
    useEffect(() => {
        const result = HEIGHT_REGEX.test(height);
        console.log(result);
        console.log(height);
        setValidHeight(result);
    }, [height])

    //Activity level
    const [activityLevel, setActivityLevel] = useState('');


    //Goal
    const [goal, setGoal] = useState('');

    //Workout location option
    const [workoutLocation, setWorkoutLocation] = useState('');

    //Workout Preferance 
    const [workoutPreferance, setWorkoutPreferance] = useState('');

    //Limitations 
    const [limitation, setLimitation] = useState('');
    const [validLimitation, setValidLimitation] = useState(false);
    const [limitationFocus, setLimitationFocus] = useState(false);

    //Validatte limitation input
    useEffect(() => {
        const result = LIMITATIONS_REGEX.test(limitation);
        console.log(result);
        console.log(limitation);
        setValidLimitation(result);
    }, [limitation])

    //Dietary restrictions input 
    const [diet, setDiet] = useState('');
    const [validDiet, setValidDiet] = useState(false);
    const [dietFocus, setDietFocus] = useState(false);

    //Validate dietary restriction input
    useEffect(() => {
        const result = LIMITATIONS_REGEX.test(diet);
        console.log(result);
        console.log(diet);
        setValidDiet(result);
    }, [diet])


    useEffect(() =>{
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/Quiz', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            //body: JSON.stringify({username: user, password: pwd})
            });
            //const data = await response.json();
            //console.log(data);
        /*Next four lines are just to make sure code work it is still not linked to the back end*/
        console.log(gender, age, weight, weightGoal, height, activityLevel, goal, workoutLocation, workoutPreferance, limitation, diet);
        setGender(''); //once submitted it will clear the username and pwd components
        setAge('');
        setWeight('');
        setWeightGoal('');
        setHeight('');
        setActivityLevel('');
        setGoal('');
        setWorkoutLocation('');
        setWorkoutPreferance('');
        setLimitation('');
        setDiet('');
        setSuccess(true);
    } catch (error) {
        console.error(error);
        setErrMsg('Failed to login. Please try again.');
        }
        
    }
    
    

    return (
        <html >
            <h1 className="quiz">Personal Quiz</h1>
            <form onSubmit = {handleSubmit}>
                <div className='questions'>

                    <h4 className="quiz">Gender:</h4>
                    <div className="option-container">
                        <button className="option" id = 'gender' onClick = {()=> setGender('Female')} >Female</button>
                        <button className="option" id = 'gender' onClick = {()=> setGender('Male')} >Male</button>
                    </div>
                    
                    <h4 className="quiz">Age range:</h4>
                    <div className="option-container">
                        <button className="option" id = 'age' onClick = {()=> setAge('Less than 18')} >Less than 18</button>
                        <button className="option" id = 'age' onClick = {()=> setAge('18-25')} >18-25</button>
                    </div>
                    <div className="option-container">
                        <button className="option" id = 'age' onClick = {()=> setAge('25-35')} >25-35</button>
                        <button className="option" id = 'age' onClick = {()=> setAge('Over 35')} >Over 35</button>
                    </div>
                
                    <h4 className="quiz">Weight (lbs): </h4>
                    <span className= {validWeight ? "valid" : "hide" }> 
                                    <FontAwesomeIcon icon = {faCheck} />
                                </span>
                                <span className= {validWeight || !weight ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon = {faTimes} />
                                </span>
                    <input
                    type = 'text'
                    id = 'weight'
                    ref = {userRef}
                    autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                    onChange = {(e) => setWeight(e.target.value)}
                    required
                    aria-invalid = {validWeight ? "false" : "true"}
                    aria-describedby = "uidnote" 
                    onFocus = {() => setWeightFocus(true)} 
                    onBlur = {() => setWeightFocus(false)}
                    />
                    <p id ="uidnote" className = {weightFocus && weight &&
                            !validWeight ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                Invalid Weight<br />
                                3 number limit.<br />
                                Only numbers allowed.
                    </p>
                    <h4 className="quiz">Weight Goal: </h4>
                    <span className= {validWeightGoal ? "valid" : "hide" }> 
                                    <FontAwesomeIcon icon = {faCheck} />
                                </span>
                                <span className= {validWeightGoal || !weightGoal ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon = {faTimes} />
                                </span>
                    <input
                    type = 'text'
                    id = 'weight-goal'
                    ref = {userRef}
                    autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                    onChange = {(e) => setWeightGoal(e.target.value)}
                    required
                    aria-invalid = {validWeightGoal ? "false" : "true"}
                    aria-describedby = "uidnote" 
                    onFocus = {() => setWeightGoalFocus(true)} 
                    onBlur = {() => setWeightGoalFocus(false)}
                    />
                    <p id ="uidnote" className = {weightGoalFocus && weightGoal &&
                            !validWeightGoal ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                Invalid Weight<br />
                                3 number limit.<br />
                                Only numbers allowed.
                    </p>
                    
                    <h4 className="quiz">Height(Feet'Inches"): </h4>
                    <span className= {validHeight ? "valid" : "hide" }> 
                                    <FontAwesomeIcon icon = {faCheck} />
                                </span>
                                <span className= {validHeight || !height ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon = {faTimes} />
                                </span>
                    <input 
                    type = 'text'
                    id = 'height'
                    ref = {userRef}
                    autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                    onChange = {(e) => setHeight(e.target.value)}
                    required
                    aria-invalid = {validHeight ? "false" : "true"}
                    aria-describedby = "uidnote" 
                    onFocus = {() => setHeightFocus(true)} 
                    onBlur = {() => setHeightFocus(false)}
                    />
                    <p id ="uidnote" className = {heightFocus && height &&
                            !validHeight ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                Invalid Height<br />
                                Format should follow: Feet'Inches"<br />
                    </p>
                    
                    <h4 className="quiz">How active are you: </h4>
                    <div className="option-container">
                        <button className="option" id = 'activity-level' onClick = {()=> setActivityLevel('Lightly Active')} >Lightly Active</button>
                        <button className="option" id = 'activity-level' onClick = {()=> setActivityLevel('Moderate Active')} >Moderate Active</button>
                        <button className="option" id = 'activity-level' onClick = {()=> setActivityLevel('Very Active')} >Very Active</button>
                    </div>
                
                    <h4 className="quiz">Enter your goal: </h4>
                    <div className="option-container">
                        <button className="option" id = 'goal' onClick = {()=> setGoal('Lose Weight')} >Lose Weight</button>
                        <button className="option" id = 'goal' onClick = {()=> setGoal('Gain Weight')}>Gain Weight</button>
                        <button className="option" id = 'goal' onClick = {()=> setGoal('Maintain Weight')}>Maintain Weight</button>
                    </div>
                    
                    <h4 className="quiz">Where will you be working out:</h4>
                    <div className="option-container">
                        <button className="option" id = 'workout-location' onClick = {()=> setWorkoutLocation('Gym workouts')} >I like to workout at the gym</button>
                        <button className="option" id = 'workout-location' onClick = {()=> setWorkoutLocation('Home workouts')}>I like to work out at home</button>
                    </div>
                    
                    <h4 className="quiz">Enter what best describes you:</h4>
                    <div className="option-container">
                        <button className="option" id = 'workout-preferance' onClick = {()=> setWorkoutPreferance('I enjoy lifting weights')}>I enjoy lifting weights</button>
                        <button className="option" id = 'workout-preferance' onClick = {()=> setWorkoutPreferance('I enjoy cardio')}>I enjoy cardio</button>
                        <button className="option" id = 'workout-preferance' onClick = {()=> setWorkoutPreferance('I enjoy a mixed of both')} >I enjoy a mixed of both</button>
                    </div>
                    
                    <h4 className="quiz">Enter any Injuries or Limitations: </h4>
                    <span className= {validLimitation ? "valid" : "hide" }> 
                                    <FontAwesomeIcon icon = {faCheck} />
                                </span>
                                <span className= {validLimitation || !limitation? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon = {faTimes} />
                                </span>
                    <input
                    type = 'text'
                    id = 'limitation'
                    ref = {userRef}
                    autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                    onChange = {(e) => setLimitation(e.target.value)}
                    required
                    aria-invalid = {validLimitation ? "false" : "true"}
                    aria-describedby = "uidnote" 
                    onFocus = {() => setLimitationFocus(true)} 
                    onBlur = {() => setLimitationFocus(false)}
                    />
                    <p id ="uidnote" className = {limitationFocus && limitation &&
                            !validLimitation ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                Invalid Input<br />
                                Limit of 23 chars.<br />
                    </p>
                    
                    <h4 className="quiz">Enter any dietary restrictions: </h4>
                    <span className= {validDiet ? "valid" : "hide" }> 
                                    <FontAwesomeIcon icon = {faCheck} />
                                </span>
                                <span className= {validDiet || !diet ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon = {faTimes} />
                                </span>
                    <input
                    type = 'text'
                    id = 'restrictions'
                    ref = {userRef}
                    autoComplete = "off" //we dont want to see previous suggestions because this is the registration page
                    onChange = {(e) => setDiet(e.target.value)}
                    required
                    aria-invalid = {validDiet ? "false" : "true"}
                    aria-describedby = "uidnote" 
                    onFocus = {() => setDietFocus(true)} 
                    onBlur = {() => setDietFocus(false)}
                    />
                    <p id ="uidnote" className = {dietFocus && diet &&
                            !validDiet? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                Invalid Input<br />
                                Limit of 23 chars.<br />
                    </p>
                    <div className="button-container">
                        <button className='SubmitButton'>Submit</button>
                    </div>

                </div>
            </form>
        </html>
        
    );

};

export default Quiz; 