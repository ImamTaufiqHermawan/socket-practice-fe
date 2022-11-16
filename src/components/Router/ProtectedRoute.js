import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...props }) => {

  console.log(useSelector(state => state.authReducer))

  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

  return (
    <>
      {isLoggedIn ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}

export default ProtectedRoute;