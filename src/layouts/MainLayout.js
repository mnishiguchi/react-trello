import React from 'react'

// Components
import AppHeader from '../components/AppHeader/AppHeader';

import './MainLayout.css'

const MainLayout = (props) => {
  const { children } = props

  return (
    <div className="MainLayout">
      <AppHeader />
      <main className="container">
        {children}
      </main>
    </div>

  )
}

export default MainLayout
