import "./secondButton.css";

function SecondButton(props) {
  return (
    <div className="scnd__btn--container">
      <a
        href="#"
        className="scnd__btn"
        style={{ color: `${props.btn__color}` }}
      >
        {props.btn__name}
      </a>
    </div>
  );
}
SecondButton.defaultProps = {
  btn__name: "click here",
  btn__color: `var(--primary-color)`,
};
export default SecondButton;
