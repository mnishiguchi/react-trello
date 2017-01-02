import React from 'react'

class BoardView extends React.Component {
  render() {
    return (
      <div className='container'>
        <main>
          <h1>
            BoardView
          </h1>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default BoardView
