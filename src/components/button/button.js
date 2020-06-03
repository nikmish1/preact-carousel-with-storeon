import { h } from "preact";
import style from "./style.css";

export const Button = ({ children, invert, moreStyle, disabled, ...props }) => (
  <button
    class={
      style.button +
      " " +
      (invert ? style.invert : "") +
      " " +
      (moreStyle ? moreStyle : "") +
      " " +
      (disabled ? style.disabled : "")
    }
    style={props.style}
    {...props}
  >
    {children}
  </button>
);
