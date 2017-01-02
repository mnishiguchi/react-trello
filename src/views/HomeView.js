import React from 'react'

class HomeView extends React.Component {
  render() {
    return (
      <main>
        <h1>
          HomeView
        </h1>
        {this.props.children}
      </main>
    )
  }
}

export default HomeView
