// import Person from './Person';

function NameList() {
  // Using Array
  const names = ['Bruce', 'Clark', 'Diana'];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  //   Using Object
  //   const persons = [
  //     {
  //       id: 1,
  //       name: 'Bruce',
  //       age: 30,
  //       skill: 'React',
  //     },
  //     {
  //       id: 2,
  //       name: 'Clark',
  //       age: 25,
  //       skill: 'Angular',
  //     },
  //     {
  //       id: 3,
  //       name: 'Diana',
  //       age: 28,
  //       skill: 'Vue',
  //     },
  //   ];
  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));
  return (
    //   Approach 1 using array
    // <div>
    //   {names.map((name) => (
    //     <h1>{name}</h1>
    //   ))}
    // </div>
    // Approach 2 using array
    <div>{nameList}</div>
    // Approach 3 using object passing the props in components
    // Approach 3 using object
    // <div>{personList}</div>
  );
}

export default NameList;
