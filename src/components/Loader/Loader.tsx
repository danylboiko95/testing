import React from "react";
import classes from "./Loader.module.scss";

interface IPropsLoader {}

const Loader: React.FC<IPropsLoader> = (props) => {
  return (
    <div className={classes.Loader}>
      <span>Loading movies</span>
      <div>
        <svg className={classes.Spinner} viewBox="0 0 50 50">
          <circle
            className={classes.Path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
