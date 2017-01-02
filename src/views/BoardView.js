import React from 'react'

class BoardView extends React.Component {
  render() {
    return (
      <div className="BoardView view-container">
        This is BoardView
        {this.props.children}
      </div>
    )
  }
}

export default BoardView
