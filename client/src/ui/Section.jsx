import classes from "../css/ui/Section.module.css";
const Section = (props) => {
  return (
    <div
      className={`${props.container && classes.container} ${
        props.className && props.className
      } ${classes.margin}`}
    >
      {props.title && (
        <div className={props.wrapper && classes.wrapper}>
          <div>
            <h1 className={classes.title}>{props.title}</h1>
          </div>
          {props.children}
        </div>
      )}
      {!props.title && props.children}
    </div>
  );
};

export default Section;
