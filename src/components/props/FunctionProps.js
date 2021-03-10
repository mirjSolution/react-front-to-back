const FunctionProps = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>{`Hello ${props.firstName} ${props.nickName}`}</h1>
      {props.children}
    </div>
  );
};

export default FunctionProps;
