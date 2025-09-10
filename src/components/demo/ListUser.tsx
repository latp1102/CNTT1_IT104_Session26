import React from 'react'
import { Link } from 'react-router-dom'

export default function ListUser() {
    const users = [
        {id: 1, name: "A"},
        {id: 2, name: "b"},
    ];
  return (
    <div>
        <h1>Danh sách User</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
