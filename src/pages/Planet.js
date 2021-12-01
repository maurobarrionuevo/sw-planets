import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {

    const { idx } = useParams()
    const [ready, setReady] = useState(false)
    const [planet, setPlanet] = useState({})

    const fetchPlanet = useCallback( async () => {
        try {
            const planet = await axios.get(`${process.env.REACT_APP_SWAPI}/planets/${idx}/`)
            setPlanet(planet.data)            
            setReady(true)
        } catch (error) {
            console.log('Error fetching planet')
        }
    },[idx])
   
    useEffect(() => {
        fetchPlanet()
    },[fetchPlanet])

    if(!ready) return <h3>Loading...</h3>

    return (
        <div style={{textAlign:'center'}}>
            <h1>Planet {planet.name}</h1>      
            <p>Climate: {planet.climate}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
        </div>
    )
}

export default Planet
