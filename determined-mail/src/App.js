import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import Emails from './components/Emails';
import About from './components/pages/About';
import axios from 'axios';

import profile1 from './components/profiles/profile1.png'
import profile2 from './components/profiles/profile2.png'
import profile3 from './components/profiles/profile3.png'
import profile4 from './components/profiles/profile4.png'
import profile5 from './components/profiles/profile5.png'

import NavBar from './components/layout/NavBar';
import './App.css';




class App extends Component {
  state = {
    emails: [
      {
        id: 1,
        profile: <img src={profile2} alt='profile1' height='60' width='60'/>,
        from: "From: Leigh Lewis",
        subject: "Subject: How are you?",
        selected: false
      },
      {
        id: 2,
        profile: <img src={profile3} alt='profile1' height='60' width='60'/>,
        from: "From: Nolan Jacobs Walker",
        subject: "Subject: Class Today",
        selected: false
      },
      {
        id: 3,
        profile: <img src={profile1} alt='profile1' height='60' width='60'/>,
        from: "From: Nicole Infantino",
        subject: "Subject: Homework",
        selected: false
      },
      {
        id: 4,
        profile: <img src={profile5} alt='profile1' height='60' width='60'/>,
        from: "From: Dr. Trevor Zink",
        subject: "Subject: TA Grading",
        selected: false
      }
    ]
  }

  // Toggle Selected
  markSelected = (id) => {
    this.setState({ emails: this.state.emails.map(email => {
      if(email.id === id) {
        email.selected = !email.selected
      }
      return email;
    }) });
  }

  // Delete Email
  delEmail = (id) => {
    this.setState({ emails: [...this.state.emails.filter(email => email.id !== id)] });
  }

    render() {
        return (
          
          <Router>
            <div className="App">
              <div className="container">
                <Header />
                <NavBar />
                <div className="inbox">
                  <switch>
                   <Route exact path="/" render={props => (
                      <React.Fragment>
                          <Emails emails={this.state.emails}
                                markSelected={this.markSelected}
                                delEmail={this.delEmail} />
                      </React.Fragment>
                    )} />
                  <Route path="/about" component={About} />
                  </switch>
                </div>
                
                
              </div>
                
            </div>
          </Router>
        );
    }
}

export default App;



