import Button from "./Button/Button";
import Card from "./Card";
import Student from "./Student"
import UserGreeting from "./UserGreeting";
import List from "./List.jsx"

function App() {
    return (
        <>
            <UserGreeting isLoggedIn = {false} userName = "Charles"/>
            <List items={fruits} category="Fruits"/>
        </>
    );
}

export default App
