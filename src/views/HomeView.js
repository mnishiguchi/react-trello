import React from 'react'

class HomeView extends React.Component {
  render() {
    return (
      <div className='HomeView view-container'>
        This is HomeView
        {this.props.children}
      </div>
    )
  }
}

export default HomeView
