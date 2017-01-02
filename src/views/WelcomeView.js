import React from 'react'
import Faker from 'Faker'

import AppHeader from '../components/AppHeader/AppHeader'

class WelcomeView extends React.Component {
  render() {
    return (
      <div className="container">
        <main>
          <div className="jumbotron">
            <h2 className="display-3">
              Welcome!
            </h2>
            <p className="lead">{Faker.Lorem.paragraphs()}</p>
          </div>

          <p>{Faker.Lorem.paragraphs()}</p>
          <p>{Faker.Lorem.paragraphs()}</p>
        </main>
      </div>
    )
  }
}

export default WelcomeView
