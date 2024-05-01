import { useState } from 'react';
import ButtonFollow from '../ButtonFollow/ButtonFollow';
import "./card.css";

function Card(props) {
    const[followState, setFollowState] = useState(false);

    function handleClick(userName) {
        console.log("UserName:", userName);
        setFollowState(!followState);

        props.changeCount(!followState);
    }


    return (
        <div className="card">
            <h2>{props.userData.name}</h2>

            <img src={props.userData.imageUrl} alt="" />

            <div className="actions">
                <button type="button" onClick={() => handleClick(props.userData.name)}>
                    <ButtonFollow isFollowing={followState}/>


                </button>
            </div>

        </div>

    )
}

export default Card;