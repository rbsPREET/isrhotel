import React from "react";
import classes from "../css/Footer.module.css";
import { Facebook, Instagram, LinkedIn, MailOutline } from "@material-ui/icons";
import { SingleLink as Link } from "../ui/Link";
import { Links } from "../ui/Links";

const Footer = () => {
  const usefulLinks = (
    <Links className={classes.list}>
      <Link to="/">Video Home Page</Link>
      <Link to="/">Browse Candi</Link>
      <Link to="/">Browse Emps</Link>
      <Link to="/">Advance Search</Link>
      <Link to="/">Job with Map</Link>
    </Links>
  );
  const theHighlights = (
    <Links className={classes.list}>
      <Link to="/">Video Home Page</Link>
      <Link to="/">Browse Candi</Link>
      <Link to="/">Browse Emps</Link>
      <Link to="/">Advance Search</Link>
      <Link to="/">Job with Map</Link>
    </Links>
  );
  const myAccount = (
    <Links className={classes.list}>
      <Link to="/">Video Home Page</Link>
      <Link to="/">Browse Candi</Link>
      <Link to="/">Browse Emps</Link>
      <Link to="/">Advance Search</Link>
      <Link to="/">Job with Map</Link>
    </Links>
  );

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h1 className={classes.logo}>ISRHOTEL</h1>
          <div className={classes.contactItem}>
            <div className={classes.title}>Email:</div>
            <span className={classes.email}>555 Tel Aviv, Rothschild 5</span>
          </div>
          <div className={classes.contactItem}>
            <div className={classes.title}>Call:</div>
            +972 834 2342
          </div>
          <div className={classes.socialContainer}>
            <div className={classes.socialIcon} style={{ color: "#3B5999" }}>
              <Facebook />
            </div>
            <div className={classes.socialIcon} style={{ color: "#E4405F" }}>
              <Instagram />
            </div>
            <div className={classes.socialIcon} style={{ color: "#55ACEE" }}>
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className={classes.center}>
          <h3 className={classes.subTitle}>Useful Links</h3>
          {usefulLinks}
        </div>
        <div className={classes.center}>
          <h3 className={classes.subTitle}>The Highlights</h3>
          {theHighlights}
        </div>
        <div className={classes.center}>
          <h3 className={classes.subTitle}>My Account</h3>
          {myAccount}
        </div>
        <div className={classes.right}>
          <h3 className={classes.subTitle}>Download Apps</h3>
          <div className={classes.appItem}>
            <MailOutline style={{ margin: "0px 10px", width: "35px", height: "35px" }} />
            <div className={classes.subAppItem}>
              <div style={{ marginTop: "10px" }}>Google Play</div>
              <div className={classes.subAppItemContent}>Get It Now</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
