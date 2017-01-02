import React from 'react'
// import { Link } from 'react-router';

import './MainLayout.css'

const MainLayout = (props) => {
  const { children } = props

  return (
    <div className="MainLayout container">
      {children}
    </div>
  )
}

export default MainLayout
