import React from 'react'

import './MainLayout.css'

const MainLayout = (props) => {
  return (
    <div className="MainLayout">
      {props.children}
    </div>
  )
}

export default MainLayout
