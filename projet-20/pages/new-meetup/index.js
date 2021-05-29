import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
