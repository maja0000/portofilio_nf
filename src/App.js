import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/About-me/AboutMe';
import './components/main.scss';
import Showcase from './components/MyWork/Showcase';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
AOS.init();

class App extends React.Component {
  state = {
    darkMode: true,
  };
  onToggleChange = () => {
    this.setState((prevState) => ({
      darkMode: !this.state.darkMode,
    }));
  };
  render() {
    const { darkMode } = this.state;
    return (
      <div className="App">
        <Header onToggleChange={this.onToggleChange} darkMode={darkMode} />
        <AboutMe />
        <Showcase darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    );
  }
}

export default App;
