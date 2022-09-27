import React from "react";

export default function Reminder(props) {
    return (
           <span> 
                {/*  i. Display a reminder
                           ii. It should be displayed as a <span> element if the showCompletedReminders is false
                               OR                        a <s> (strike) element if the showCompletedReminders is true
                
                */} 

                {props.showCompletedReminders ? (<s>{props.reminder.title}</s>) : (<span>{props.reminder.title}</span>)}

            </span>
    );
};


