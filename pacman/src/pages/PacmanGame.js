import React from 'react'

const PacmanGame = () => {
  const pacmanHtml = "files/pacman.html";
  return (
    <div className='pacman-game'>
      {/* <p>pacman game</p> */}
      <iframe className="pacman-iframe" title="pacman" src={pacmanHtml} />
    </div>
  )
}

export default PacmanGame;