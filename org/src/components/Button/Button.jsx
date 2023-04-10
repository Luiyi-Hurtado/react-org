import "./Button.css";

function Button(props) {
    return (
        <button className="button">{props.button_label}</button>
    );
}

export default Button;