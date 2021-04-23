import React from "react";
import classes from "./ErrorHandler.module.scss";

interface IPropsErrorHandler {
  errorMessage?: string;
}

const ErrorHandler: React.FC<IPropsErrorHandler> = (props) => {
  return (
    <div className={classes.ErrorHandler}>
      {!props.errorMessage ? "Something went wrong" : props.errorMessage}
    </div>
  );
};

export default ErrorHandler;
