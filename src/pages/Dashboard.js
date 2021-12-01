import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Styles from './Dashboard.module.css'
import ListItem from '../components/ListItem'

const Dashboard = () => {

    const [planets, setPlanets] = useState([])
    const [ready, setReady] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetchPlanets()
    },[])

    const fetchPlanets = async () => {
        try{
            const planets = await axios.get(`${process.env.REACT_APP_SWAPI}/planets`)
            setPlanets(planets.data.results)
            setReady(true)
        } catch {
            console.log('Error getting planets')
        }
    }

    const onPlanetClick = (idx) =>{
       navigate(`/planet/${idx}`)
    }

    if(!ready) return <h3>Loading...</h3>

    return (
        <div className={Styles.dashboardContainer}>
            <h1>Star Wars Planets</h1>
            <ul>
                {planets.map((planet, idx) => {
                    return <ListItem onPlanetClick={onPlanetClick} key={planet.url} planet={planet} idx={idx} />
                })}
            </ul>
        </div>
    )
}

export default Dashboard
