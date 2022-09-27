import React, { useState } from "react";
import "./App.css";
import "./components/Reminder"
import "./components/Header"
// import the Reminder component
// import the Header component

function App() {
    // this is the object to define the properties of a reminder
    const initialReminder =  {title: "", completed: false, id: 0}

    // state variables for a reminder
    const [reminder, setReminder] = useState(initialReminder)

    // state variable that stores the list of reminders
    const [reminders, setReminders] = useState([])

    // state variable used to toggle between displaying the oustanding or completed reminders on the page
    const [showCompletedReminders, setShowCompletedReminders] = useState(false)

  // Helper Functions

  /* 
    method to set a new reminder object to the reminder state variable:
    i. create an object following the initialReminder object property
          ii. ID should be generated randomly (You can use Math.floor(Math.random() * 1000))
  */
  function setNewReminder(e) {
    
  }

  /*
    Complete this method to add a reminder to the reminders array
  */
  function addReminder() {
  }
  
  /*
     Complete this method to mark the reminder with the "id" argument as completed. 
  */
  function completeReminder(id) {
  }

  /*
     Complete this method to retrieve the reminders to be displayed based on showCompletedReminders value
    i) if showCompletedReminders is false, retrieved reminders that have not been completed and vice versa
          ii) you should return the retrieved reminders
  */
  function displayedReminders() {
    return []; // You should delete this; it's just notifying that your method should return an array
  }


  /*
    Complete this method to delete the reminder with the passed "id"
  */
  function deleteReminder(id) {
  }


  // Main part of app
  return (
    <div className="app">
      {/*  Add the Header component */}

      <input
        type="text"
        placeholder="Add a new reminder.."
        value={reminder.title}
        onChange={(e) => setNewReminder(e)}
      />

      {/* Add a button elementwith onClick that calls the addReminder() */}

      <div>
        <p>Showing : {showCompletedReminders ? 'Completed': 'Outstanding'} reminders</p>
        <p>Click to <button onClick={() => setShowCompletedReminders((showCompleted) => !showCompleted)}> Show {showCompletedReminders ? "outstanding": "completed"} reminders</button></p>
      </div>

      {displayedReminders().map((reminder) => (
        <div>
           {/*  Add the Reminder component
               Pass both the reminder object and showCompletedReminders variable as props to the component
           */}

          {/*   i. Add a complete button element that a user can use to indicate a reminder is completed.
                    ii. Only show this button when the showCompletedReminders is false
                    
               Call the appropriate helper method already defined above on it's onClick event.
                    ii. Use the my-button className for styling
                    iii. Use  "Complete  ✅" as the button's content
           */}
          
          {/*  i. Add a delete button element to delete a reminder

               Call the appropriate helper method already defined above on it's onClick event.
                    ii. Use the my-button className for styling
                    iii. Use "❌" as the button's content
           */}
        </div>
      ) )}
    </div>
  );
}

export default App;
