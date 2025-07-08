import profilePic from "./assets/cw.png"

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>CW COMPANY</h2>
            <p>Game Company that make games that really matter!</p>
        </div>
    );
}

export default Card