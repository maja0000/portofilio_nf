import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/About-me/AboutMe';
import './components/main.scss';
import Showcase from './components/MyWork/Showcase';
import Footer from './components/Footer/Footer';
import Animation from './components/Animation/Animation';

import AOS from 'aos';
AOS.init();

class App extends React.Component {
  state = {
    darkMode: true,
    animation: true,
  };
  onToggleChange = () => {
    this.setState((prevState) => ({
      darkMode: !this.state.darkMode,
    }));
  };
  render() {
    setTimeout(() => {
      this.setState({ animation: false });
    }, 4000);
    const { darkMode } = this.state;
    return (
      <>
        {this.state.animation ? (
          <Animation />
        ) : (
          <div className="App">
            <Header onToggleChange={this.onToggleChange} darkMode={darkMode} />
            <AboutMe />
            <Showcase darkMode={darkMode} />
            <Footer />
          </div>
        )}
      </>
    );
  }
}

export default App;
