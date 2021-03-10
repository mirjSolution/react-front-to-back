/* Destructuring in parameters */
// const DestructuringFunctional = ({ firstName, heroName }) => {
//   return (
//     <div>
//       <h1>
//         {firstName} a.k.a. {heroName}
//       </h1>
//     </div>
//   );
// };

/* Destructuring inside the function body */
const DestructuringFunctional = (props) => {
  const { firstName, heroName } = props;
  return (
    <div>
      <h1>
        {firstName} a.k.a. {heroName}
      </h1>
    </div>
  );
};

export default DestructuringFunctional;
