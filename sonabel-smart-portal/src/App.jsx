import React from 'react'
import PlayerCard from './components/PlayerCard'
import {player} from './data/players.js'
import './App.css'
function App() {

  return (
    <>
    <h1>Joueurs de l'équipe nationale du Maroc</h1>
    <div className='player-container'>
      {
      player.map((p, index) => (
        <PlayerCard key={index} player={p} /> /*{nom:'Yassine Bounou', poste:'gardien', age:35, equipe:'Al Hilal', photo:'https://www.lodj.ma/photo/art/grande/93791129-65491032.jpg?v=1768903764'}*/
      ))}
    </div>
   </>
  )
}

export default App