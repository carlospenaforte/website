import Button from "./Button/Button";
import Card from "./Card";
import Student from "./Student"

function App() {
    return (
        <>
            <Student name="Sponge" age={30} isStudent={true}/>
            <Student name="Patrick" age={29} isStudent={false}/>
            <Card/>
            <Button/>
        </>
    );
}

export default App
