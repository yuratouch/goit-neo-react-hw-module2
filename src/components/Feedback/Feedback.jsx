import "./Feedback.css";

function Feedback({ options, positive }) {
  const keys = Object.keys(options);
  return (
    <div className="feedback">
      <ul>
        {keys.map((option) => {
          return (
            <li key={option}>
              <p>
                {option}: {options[option]}
              </p>
            </li>
          );
        })}
        <li>positive: {positive}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
