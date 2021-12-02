import React from 'react'
import PropTypes from 'prop-types';

const ListItem = ({ planet, idx, onPlanetClick }) => {
    return <li onClick={() => onPlanetClick(idx + 1)} key={planet.url}>{planet.name}</li>
}

export default ListItem


ListItem.defaultProps = {
    planet: 'Some planet',
}

ListItem.propTypes = {
    planet: PropTypes.string,
    idx: PropTypes.number,
    onPlanetClick: PropTypes.func
}