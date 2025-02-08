import "./Description.css";

function Description({ heading, message }) {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <p>{message}</p>
    </>
  );
}

export default Description;
