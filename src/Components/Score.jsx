import React from 'react'

const Score = ({score}) => {
  return (
    <div className='score-box'>
        <h2>Score: {score}</h2>
        <div className='progress'>
            <div className='progress-bar' style={{ width: `${score}%` }}>
            </div>
        </div>
    </div>
  )
}

export default Score