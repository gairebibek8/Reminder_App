import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Reminder from "./components/Reminder.js";
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
    setReminder({
      title : e.target.value,
      completed : false,
      id : Math.floor(Math.random() * 1000)

    });
    
  }

  /*
    Complete this method to add a reminder to the reminders array
  */
  function addReminder() {
    if (reminder.title) {
      setReminders((oldReminders) => [...oldReminders, reminder]);
    }
    setReminder(initialReminder);
    
  };

  
  /*
     Complete this method to mark the reminder with the "id" argument as completed. 
  */
  function completeReminder(id) {
    const updatedReminders = reminders && reminders.map((myReminder) => {
        if (myReminder.id === id) {
          myReminder.completed = true;
        }
        return myReminder;
      });

    if (!updatedReminders) {
      return;
    }

    setReminders(updatedReminders);
  };

  /*
     Complete this method to retrieve the reminders to be displayed based on showCompletedReminders value
    i) if showCompletedReminders is false, retrieved reminders that have not been completed and vice versa
          ii) you should return the retrieved reminders
  */
  function displayedReminders() {
    let completedReminders = [];
    let uncompletedReminders = [];

    reminders && reminders.map((myReminder) => {
        if (myReminder?.completed === true) {
          completedReminders.push(myReminder);
        } else if (myReminder?.completed === false) {
          uncompletedReminders.push(myReminder);
        }
      });


    if (showCompletedReminders) {
      return completedReminders;
    }
    return uncompletedReminders;
  };


  /*
    Complete this method to delete the reminder with the passed "id"
  */
  function deleteReminder(id) {
    const remainingReminders = reminders.filter((myReminder) => {
      return myReminder.id !== id;
    });

    setReminders(remainingReminders);
  };


  // Main part of app
  return (
    <div className="app">
      <Header />

      <input
        type="text"
        placeholder="Add a new reminder.."
        value={reminder.title}
        onChange={(e) => setNewReminder(e)}
      />

      {/* Add a button elementwith onClick that calls the addReminder() */}
      <button onClick={() => addReminder()}>Add Reminder</button>


      <div>
        <p>Showing : {showCompletedReminders ? 'Completed': 'Outstanding'} reminders</p>
        <p>Click to <button onClick={() => setShowCompletedReminders((showCompleted) => !showCompleted)}> Show {showCompletedReminders ? "outstanding": "completed"} reminders</button></p>
      </div>

      {displayedReminders().map((reminder) => (
        <div>
          <Reminder
            reminder={reminder}
            showCompletedReminders={showCompletedReminders}
          />

          {!showCompletedReminders && (
            <button
              className="my-button"
              onClick={() => completeReminder(reminder.id)}
            >
              Complete✅
            </button>
          )}


          <button
            className="my-botton"
            onClick={() => deleteReminder(reminder.id)}
          >
            ❌
          </button>
      </div>
      ) )}
    </div>
  );
}

export default App;
