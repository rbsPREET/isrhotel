import classes from "../css/ui/Section.module.css";
const Section = (props) => {
  const SectionClasses = `
  ${props.container && classes.container} 
  ${props.className && props.className} 
  ${classes.margin}`;
  return (
    <div style={{width:`${props.customWidth && props.customWidth}px`}} className={SectionClasses}>
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
