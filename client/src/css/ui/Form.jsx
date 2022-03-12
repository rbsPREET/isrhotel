const Form = (props) => {
  return (
    <form method={props.method || "GET"} onSuccess={props.onSuccess} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
