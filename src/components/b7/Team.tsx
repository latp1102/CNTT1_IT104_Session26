import React from 'react'
import { useParams } from 'react-router-dom';

export default function Team() {
    const {teamId} = useParams();
  return (
    <div>
        <h3>Chi tiết</h3>
        <p>Team Id: {teamId}</p>
    </div>
  )
}
