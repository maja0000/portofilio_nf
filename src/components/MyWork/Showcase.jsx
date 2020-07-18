import React from 'react';
import ProjectList from '../Project/AllProjects';
import ButtonSort from '../SelectButtons/ButtonSort';
import './Showcase.scss';

const projectsList = [
  {
    id: 'project1',
    title: 'Task Managment feature',
    language: ['full stack', 'react'],
    img: 'https://media3.giphy.com/media/Td9M80vU32jp81waYh/giphy.gif',
    link: 'https://nostalgic-torvalds-f7ea0c.netlify.app/',
    description: `My most recent project, developed durning internship at OBI+. Full stack task managment feature which will be merged into existing app. App written using MERN stack, redux, styled components.`,
  },
  {
    id: 'project2',
    title: 'Have a good time, at home',
    language: ['full stack', 'react'],
    img: 'https://media2.giphy.com/media/RGozlrfPdCHKe5EGYn/giphy.gif',
    link: 'https://have-a-good-time.herokuapp.com/',
    description: `App with activities ideas to do at home durning the pandemic lockdown. User can contribute, add their suggestions and vote for the most interesting ones. Page contains useful resources on the virus and couple of ways users can contribute / help.`,
  },
  {
    id: 'project3',
    title: 'MyMeteo, weather app',
    language: ['react'],
    img: 'https://media0.giphy.com/media/XcG6XSd8Rse4pbjFU5/giphy.gif',
    link: 'https://my-meteo-weather-app.herokuapp.com/',
    description: `Weather aplication using data from different APIs to display weather forcast and statistics for given location. While writing it I learned how important is to plan ahead the app structure and it's data flow.  In the near future I'd like to improve it by using useReducer and React Context`,
  },
  {
    id: 'project4',
    title: 'LacesUP',
    language: ['react', 'full stack', 'hackathon'],
    img: 'https://media0.giphy.com/media/ihl85kUHnNLnzoG8FF/giphy.gif',
    link: 'https://hardcore-austin-68e6f2.netlify.app/',
    description: `Feature created for a company selling laces. Application allows its user "try on" laces of their choice on different types of shoes in various colors. Client haven't provided all need svg files, hence functionality isn't complete. On the second page /admin, employees can add new patterns, colors and models of shoes.`,
  },
  {
    id: 'project5',
    title: 'HEROship, dating app for heroes',
    language: ['react', 'hackathon'],
    img: 'https://media3.giphy.com/media/kDqqO6dLyhbENMa3wT/giphy.gif',
    link: 'https://zen-shaw-5af657.netlify.app/',
    description:
      'Hero-ship is a project I created with another developer durning a two days long hackathon. It was very important to quickly plan, prioritise tasks and  keep great communication between each other. ',
  },
];

class MyWork extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: projectsList,
    };
  }
  render() {
    const { darkMode } = this.props;
    const { projects } = this.state;
    const onSelectWork = (event) => {
      this.setState({
        projects: projectsList.filter((element) => {
          return element.language.includes(event.target.value);
        }),
      });
    };
    const onSelectAll = () => {
      this.setState({ projects: projectsList });
    };
    const style = {
      bg: {
        backgroundColor: darkMode ? '#2E2E2E' : 'white',
      },
      textColor: {
        color: darkMode ? 'white' : '#2E2E2E',
      },
    };
    return (
      <section id="myWork" style={style.bg}>
        <div className="titleButtons">
          <h1 className="title" style={style.textColor}>
            last projects
          </h1>
          <div className="select-project">
            <ButtonSort
              darkMode={darkMode}
              className="option-button"
              onSelect={onSelectAll}
              text="select all"
            />
            {/* <ButtonSort
              className="option-button"
              onSelect={onSelectWork}
              text="html/css"
            /> */}
            <ButtonSort
              darkMode={darkMode}
              className="option-button"
              onSelect={onSelectWork}
              text="react"
            />
            <ButtonSort
              darkMode={darkMode}
              className="option-button"
              onSelect={onSelectWork}
              text="full stack"
            />
            <ButtonSort
              darkMode={darkMode}
              className="option-button"
              onSelect={onSelectWork}
              text="hackathon"
            />
          </div>
        </div>
        <ProjectList darkMode={darkMode} projects={projects} styling={style} />
      </section>
    );
  }
}
export default MyWork;
