import "../assets/styles/Button.css";

const Button = ({ text, ...props }) => {
  return (
    <button {...props} className={`MyButton ${props.className || ""}`}>
      {text || "Default Text"}
    </button>
  );
};
export default Button;
