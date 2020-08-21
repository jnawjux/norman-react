import React from 'react'
import './App.css'
import mailchimp from "@mailchimp/mailchimp_marketing";

class App extends React.Component {
  render() {
    return (
      <div className="app-layout ex4">
        <header className="section">
          <i className="em em-speech_balloon" aria-role="presentation" aria-label="SPEECH BALLOON"></i>
          <p className="title">Norman</p>
        </header>
        <main className="section">
          <h1>
            HELLOOOOOO
          </h1>
        </main>
        <footer className="section">put your feet up</footer>
      </div>
    )
  }
}

export default App;