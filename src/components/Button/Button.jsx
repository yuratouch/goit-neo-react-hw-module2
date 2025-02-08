import "./Button.css";
import clsx from "clsx";

function Button({ text, onClick, btnType }) {
  return (
    <button className={clsx("button", btnType)} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
