import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Teams() {
    const teams = [
        {id: "1", name: "Team A"},
        {id: "2", name: "Team B"},
        {id: "3", name: "Team C"},
    ]
  return (
    <div>
        <h2>Teams</h2>
        <ul>
            {teams.map((team) => (
                <li key={team.id}>
                    <Link to={team.id}>{team.name}</Link>
                </li>
            ))}
        </ul>
        <Outlet/>
    </div>
  )
}
