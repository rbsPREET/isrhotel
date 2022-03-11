import classes from "../css/Section.module.css";
const Section = (props) => {
  return (
    <div
      className={`${props.container && classes.container} ${props.className} ${classes.margin}`}
    >
      <div className={props.wrapper && classes.wrapper}>
        <div>
          <h1 className={props.title && classes.title}>{props.title}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
