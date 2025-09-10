import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetail() {
    const {id} = useParams();
  return (
    <div>
        <h2>Chi tiết User</h2>
        <p>Id: {id}</p>
    </div>
  )
}
