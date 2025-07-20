import styles from "./Button.module.css"

function Button(){

    const handleClick = () => console.log("Ouch!");
    
    const handleClick2 = () => console.log('${name} stop clicking me');

    return(<button onClick={() => handleClick2("Bro")}>Click Me</button>);
}

export default Button