import React from 'react'

function Genius({ name, special }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{special} 천재</h2>
        </div>
    )
}

export default Genius