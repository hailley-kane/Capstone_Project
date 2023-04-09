import { Component, Fragment } from "react";
import {Helmet} from 'react-helmet';
import {useRef, useState, useEffect} from 'react';

const Quiz = () => {
    return (
        <form>
            <h1>Personal Quiz</h1>
            <div className='questions'>
                <h4>Gender:</h4>
                <div className="option-container">
                    <p className="option">Female</p>
                    <p className="option">Male</p>
                </div>
                
                <h4>Age range:</h4>
                <div className="option-container">
                    <p className="option">Less than 18</p>
                    <p className="option">18-20</p>
                </div>
                <div className="option-container">
                    <p className="option">20-30</p>
                    <p className="option">Over 30</p>
                </div>
               
                <h4>Weight: </h4>
                <input
                type = 'text'
                id = 'weight'
                required
                />
                <h4>Weight Goal: </h4>
                <input
                type = 'text'
                id = 'weight'
                required
                />
                
                <h4>Height: </h4>
                <input
                type = 'text'
                id = 'height'
                required
                />
                
                <h4>How acrtive are you: </h4>
                <div className="option-container">
                    <p className="option">Lightly Active</p>
                    <p className="option">Moderate Active</p>
                    <p className="option">Very Active</p>
                </div>
               
                <h4>Enter your goal: </h4>
                <div className="option-container">
                    <p className="option">Lose Weight</p>
                    <p className="option">Gain Weight</p>
                    <p className="option">Maintain Weight</p>
                </div>
                
                <h4>Where will you be working out:</h4>
                <div className="option-container">
                    <p className="option">I like to workout at the gym</p>
                    <p className="option">I like to work out at home</p>
                </div>
                
                <h4>Enter what best describes you:</h4>
                <div className="option-container">
                    <p className="option">I enjoy lifting weights</p>
                    <p className="option">I enjoy cardio</p>
                    <p className="option">I enjoy a mixed of both</p>
                </div>
                
                <h4>Enter any Injuries or Limitations: </h4>
                <input
                type = 'text'
                id = 'limitations'
                required
                />
                
                <h4>Enter any dietary restrictions: </h4>
                <input
                type = 'text'
                id = 'restrictions'
                required
                />
                <div className="button-container">
                    <button className='SubmitButton'>Submit</button>
                </div>

            </div>
        </form>
        
    );

};

export default Quiz; 