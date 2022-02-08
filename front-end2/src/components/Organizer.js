import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import TimePicker from "react-time-picker";

//import styled from 'styled-components';

const Organizer = (props) => {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit(); 
    }
    const onChange = evt => {
        console.log(evt.target.checked, evt.target.type);
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const today = new Date();

    return (
        <form id="organizer-form">
            <h2>Create a potluck!</h2>
            <p>Submit details about yourself and the event you're organizing in order to share your potluck!</p>
            <div id="event-organizer">'
                <label>Organizer Name 
                    <input 
                        value={values.organizerName}
                        onChange={onChange}
                        name='organizerName'
                        type='text'
                        placeholder='Enter your name here'
                        maxLength='25'
                    />
                </label>

                <label>Organizer E-mail Address
                    <input
                        value={values.organizerEmail}
                        onChange={onChange}
                        name='organizerEmail'
                        type='email'
                        placeholder='Enter your email here'
                        />
                </label>

                <label>Organizer Phone Number
                    <input 
                        value={values.organizerPhone}
                        onChange={onChange}
                        name='organizerPhone'
                        type='tel'
                        placeholder="Format: 123-456-7890"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        maxLength='12'
                    />
                </label>

                <label>Organizer access password
                    <p>Use this password to access and edit event</p>
                    <input 
                        value={values.accessPassword}
                        onChange={onChange}
                        name='accessPassword'
                        type="password"
                        placeholder="Remember this password!"
                        maxLength="15"
                    />
                </label>
            </div>

            <div id="event-details">
                <p>Provide some details about your event so you can share it with guests.</p>
                <label>Potluck Name
                    <input
                        value={values.potluckName}
                        onChange={onChange}
                        name='potluckName'
                        type='text'
                        maxLength='15'
                        placeholder="Enter Potluck Name"
                    />
                </label>

                <label>Date of Potluck
                    <input
                        value={values.potluckDate}
                        type="date"
                        name="potluckDate"
                        placeholder={today}
                    />
                </label>
                    
                <label>Approximate Potluck Time
                {/* https://www.npmjs.com/package/react-time-picker to style this element */}
                    <TimePicker
                        onChange={onChange}
                        value={values.potluckTime}
                    />
                </label>

                <label>Potluck Location
                    <input 
                        type="text"
                        value={values.potluckLocation}
                        name="potluckLocation"
                        maxLength="30"
                        placeholder="Enter Potluck Location"
                    />
                </label>
            </div>
            <div id="dishes">
                <div id="dishes-needed">
                    {/* place component for adding dishes to list here  */}
                </div>
                <div id="dishes-list">
                    {/* place list returned from other component here */}
                </div>
            </div>
            <div className='submit-btn'>
                <button id='submit' disabled={disabled}>Create Potluck!</button>
            </div>
            <div className='errors'>
                    <div>{errors.organizerName}</div>
                    <div>{errors.organizerEmail}</div>
                    <div>{errors.organizerPhone}</div>
                    <div>{errors.organizerPassword}</div>
                    <div>{errors.potluckDate}</div>
                    <div>{errors.potluckLocation}</div>
                    <div>{errors.potluckName}</div>
                    <div>{errors.potluckTime}</div>
                </div>

        </form>
    )
}



export default Organizer;