import React from 'react'
import '../styles/player.css'
function PlayerCard({player}) {
  return (
    <div className='player-card'>
    <p><img src={player.photo} /></p>
    <h3>{player.nom}</h3>
    <p>Poste: <span>{player.poste}</span></p>
    <p>Age:<span> {player.age}</span></p>
    <p>Equipe :<span> {player.equipe}</span></p>
    </div>
  )
}

export default PlayerCard