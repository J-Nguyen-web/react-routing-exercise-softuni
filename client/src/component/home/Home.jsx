import { useEffect, useState } from "react"
import Game from "../game-card/GameCard.jsx";

export default function Home() {

    const [latestGames, setLatestGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games')
        .then(response => response.json())
        .then(result => {
            const resultGames = Object.values(result) // взимане на данните(values) на масив от всичките игри (result)
            .sort((a, b) => b._createdOn - a._createdOn) // сортиране по дата на създаване (формата му е цифров)
            .slice(0, 3); // взимане на първите (от 0 index) три сортирани (, 3)

            setLatestGames(resultGames)
        })
    },([]))

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="./images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">

                    {/* <!-- Display div: with information about every game (if any) --> */}
                    <div className="home-container">

                            {/* <!-- Display paragraph: If there is no games  --> 
                            ще покаже този параграф ако няма данни*/}
                            {latestGames === 0 && <p className="no-articles">No games yet</p>}

                            {latestGames.map(game => <Game key={game._id} {...game} />)}
                            {/* няма да се покаже нищо ако няма latestGames */}
                    </div>
                </div>
            </div>
        </section>        
    );
}