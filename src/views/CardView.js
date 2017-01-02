import React from 'react'

class CardView extends React.Component {
  render() {
    return (
      <div className='container'>
        <main>
          <h1>
            CardView
          </h1>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default CardView
