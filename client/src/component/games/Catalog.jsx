    import { useEffect, useState } from "react";
    import { Link } from "react-router";
    import Game from "../game-card/GameCard.jsx";

    const base_URL = 'http://localhost:3030/jsonstore/games'

    export default function Catalog() {

        const [games, setGames] = useState([])

        useEffect(() => {
            ( async () => { // самоизпълняваща се async arrow function
                try {
                    const response = await fetch(base_URL )
                    const result = await response.json()
                    setGames(Object.values(result))
                } catch (error) {
                    alert(error.message)
                }            
            })();
        }, ([]))

        return (
            <section id="catalog-page">
            <h1>Catalog</h1>
            {/* <!-- Display paragraph: If there is no games  --> */}
            {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}
            
            
            {/* <!-- Display div: with information about every game (if any) --> 
            ще има обаче празен контейнер без да са генерирани данни вътре, но ако има горния ред няма да се изпълни и да го има*/}
            <div className="catalog-container">
                { games.map(game => <Game key={game._id} {...game}/>) }    
            </div>

            
        </section>
        );
    }

