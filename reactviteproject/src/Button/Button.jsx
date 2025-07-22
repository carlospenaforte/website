import styles from "./Button.module.css"

function Button(){

    const handleClick = (e) => e.target.textContext = "ouch!";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click Me</button>);
}

export default Button