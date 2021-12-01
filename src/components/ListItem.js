import React from 'react'

const ListItem = ({ planet, idx, onPlanetClick }) => {
    return <li onClick={() => onPlanetClick(idx + 1)} key={planet.url}>{planet.name}</li>
}

export default ListItem
