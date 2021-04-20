import React, {useState} from 'react'

export default function GameProvidersAccordion({ gameProvider }) {

    const [isOpen, setOpen] = useState(false);

    const GameProvidersList = ({game, i}) => {
        
        if(isOpen){
            return (
                <li>
                    {game.title}
                </li>
            )
        } else {
            if(i > 3){
                return null
            } else {
                return (
                    <li>
                        {game.title}
                    </li>
                )
            }
        }
    }

    return (
        <>
        <div className="payment-methods__heading">
            <span>Game Providers ({gameProvider.length})</span>
            {gameProvider.length > 3 && <button onClick={() => setOpen(!isOpen)}> {isOpen ? 'Hide' : 'Show All'} </button>}
        </div>
        <ul>
        {gameProvider.length && gameProvider.map((game, i) => {
            return <GameProvidersList game={game} i={i} />
        })}
        </ul>
        </>
    )
}
