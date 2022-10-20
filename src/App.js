import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    tabId: languageGreetingsList[0].id,
  }

  selectLanguage = id => {
    this.setState({tabId: id})
  }

  renderGreetingCard = () => {
    const {tabId} = this.state
    const greetings = languageGreetingsList.filter(
      language => language.id === tabId,
    )

    return (
      <div className="greeting-container">
        {greetings.map(greet => (
          <img
            key={greet.id}
            src={greet.imageUrl}
            alt={greet.imageAltText}
            className="greeting-image"
          />
        ))}
      </div>
    )
  }

  render() {
    const {tabId} = this.state
    console.log(tabId)
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="ul-container">
          {languageGreetingsList.map(language => (
            <li key={language.id}>
              <button
                type="button"
                className="language-btn"
                onClick={() => this.selectLanguage(language.id)}
              >
                {language.buttonText}
              </button>
            </li>
          ))}
        </ul>
        {this.renderGreetingCard()}
      </div>
    )
  }
}

export default App
