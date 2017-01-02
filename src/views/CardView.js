import React from 'react'

class CardView extends React.Component {
  render() {
    return (
      <div className='CardView view-container'>
        This is CardView
        {this.props.children}
      </div>
    )
  }
}

export default CardView
