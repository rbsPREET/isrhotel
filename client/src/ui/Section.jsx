import classes from "../css/Section.module.css";
const Section = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={(props.wrapper || false) && classes.wrapper}>
        <div>
          <h1 className={props.title && classes.title}>{props.title}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
