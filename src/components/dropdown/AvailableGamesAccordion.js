import React, { useEffect, useState } from 'react'
import allGamesCategories from '../../data/AllGamesCategories';

export default function AvailableGamesAccordion({ availableGames }) {
    
    const [isOpen, setOpen] = useState(false);
    const [namesToFilterBy] = useState(availableGames.map(game => game.name));
    const [allGames] = useState(allGamesCategories( ['Latest Online Games', 'Most Popular Online Casino Games'] ));

    allGames.forEach(game => game.available = false)
    allGames.forEach(game => {
        if(namesToFilterBy.some(name => name === game.name)){
            game.available = true
        }
    });
    allGames.sort((a, b) => {
        return a.available - b.available
    }).reverse();
    
    
    useEffect(() => {
        allGames.sort((a, b) => {
            return a.available - b.available
        }).reverse();
    }, [isOpen])

    
    

    const GamesList = ({gameCateg, i}) => {
        if(isOpen){
            return (
                <li className={`${gameCateg.available ? 'available' : 'unavailable'}`}>
                    {gameCateg.tax_games_categories.termIcon && <img src={gameCateg.tax_games_categories.termIcon.mediaItemUrl} alt=""/> }
                    {!gameCateg.available && 'No '}{gameCateg.name}
                </li>
            )
        } else {
            if(i > 3){
                return null
            } else {
                return (
                    <li className={`${gameCateg.available ? 'available' : 'unavailable'}`}>
                        {gameCateg.tax_games_categories.termIcon && <img src={gameCateg.tax_games_categories.termIcon.mediaItemUrl} alt=""/> }
                        {!gameCateg.available && 'No '}{gameCateg.name}
                    </li>
                )
            }
        }
    }

    return (
        <>
        <div className="available-games__heading">
            <span>Available games</span>
            <button onClick={() => setOpen(!isOpen)}> {isOpen ? 'Hide' : 'Show All'} </button>
        </div>
        <ul>
        {allGames.length && allGames.map((gameCateg, i) => {
            return <GamesList gameCateg={gameCateg} i={i} />
        })}
        </ul>
        </>
    )
}
