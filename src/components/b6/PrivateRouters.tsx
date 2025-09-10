import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouters() {
    const [isAuthenticated] = useState<boolean>(false);

    return (
    isAuthenticated ? <Outlet/> : <Navigate to="/logins" replace/>
  )
}
