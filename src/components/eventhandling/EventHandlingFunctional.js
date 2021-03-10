const EventHandlingFunctional = () => {
  function clickHandler() {
    alert('Button Clicked');
  }
  return (
    <div>
      <button onClick={clickHandler}>Functional Event Handling</button>
    </div>
  );
};

export default EventHandlingFunctional;
