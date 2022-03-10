import classes from "../css/Section.module.css";
const Section = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div>
          <h1>{props.title}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
