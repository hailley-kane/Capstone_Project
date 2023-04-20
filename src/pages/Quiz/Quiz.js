import { getOverlayAlpha } from "@mui/material";
import { Component, Fragment } from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../Quiz/Quiz.css'
import {useRef, useState, useEffect} from 'react';

//Gender and age are multiple choice
const WEIGHT_REGEX = /^[0-9]{1,3}$/
const HEIGHT_REGEX = /^([0-9]{1,3})+('[0-9]{1,3})+(")$/

const Quiz = () => {
    const userRef = useRef(); 
    const errRef = useRef();
  

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

    const[success, setSuccess] = useState(false);


    useEffect(() =>{
        userRef.current.focus();
    }, [])


    return (
        <html >
            <h1 className="quiz">Personal Quiz</h1>
            <div className='questions'>

                <h4 className="quiz">Gender:</h4>
                <div className="option-container">
                    <p className="option">Female</p>
                    <p className="option">Male</p>
                </div>
                
                <h4 className="quiz">Age range:</h4>
                <div className="option-container">
                    <p className="option">Less than 18</p>
                    <p className="option">18-25</p>
                </div>
                <div className="option-container">
                    <p className="option">25-35</p>
                    <p className="option">Over 35</p>
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
                
                <h4 className="quiz">How acrtive are you: </h4>
                <div className="option-container">
                    <p className="option">Lightly Active</p>
                    <p className="option">Moderate Active</p>
                    <p className="option">Very Active</p>
                </div>
               
                <h4 className="quiz">Enter your goal: </h4>
                <div className="option-container">
                    <p className="option">Lose Weight</p>
                    <p className="option">Gain Weight</p>
                    <p className="option">Maintain Weight</p>
                </div>
                
                <h4 className="quiz">Where will you be working out:</h4>
                <div className="option-container">
                    <p className="option">I like to workout at the gym</p>
                    <p className="option">I like to work out at home</p>
                </div>
                
                <h4 className="quiz">Enter what best describes you:</h4>
                <div className="option-container">
                    <p className="option">I enjoy lifting weights</p>
                    <p className="option">I enjoy cardio</p>
                    <p className="option">I enjoy a mixed of both</p>
                </div>
                
                <h4 className="quiz">Enter any Injuries or Limitations: </h4>
                <input
                type = 'text'
                id = 'limitations'
                required
                />
                
                <h4 className="quiz">Enter any dietary restrictions: </h4>
                <input
                type = 'text'
                id = 'restrictions'
                required
                />
                <div className="button-container">
                    <button className='SubmitButton'>Submit</button>
                </div>

            </div>
        </html>
        
    );

};

export default Quiz; 