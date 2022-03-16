const Form = (props) => {
  const { method,onSubmit, ...data } = props;
  return (
    <form method={method || "GET"} onSubmit={onSubmit} {...data}>
      {props.children}
    </form>
  );
};

export default Form;
