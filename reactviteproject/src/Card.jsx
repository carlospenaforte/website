import profilePic from "./assets/cw.png"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" style={{ width: "200px", height: "auto" }} />
            <h2 className="card-title">CW COMPANY</h2>
            <p className="card-text">Game Company that make games that really matter!</p>
        </div>
    );
}

export default Card