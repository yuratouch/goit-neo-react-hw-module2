import "./Options.css";
import Button from "/src/components/Button/Button";

function Options({ options, setFeedback, totalFeedback, handleReset }) {
  return (
    <ul className="options">
      {options.map((option) => (
        <li key={option}>
          <Button
            text={option}
            onClick={() => setFeedback(option)}
            btnType={option}
          />
        </li>
      ))}
      {totalFeedback > 0 && (
        <Button text={"reset"} onClick={handleReset} btnType={"reset"} />
      )}
    </ul>
  );
}

export default Options;
