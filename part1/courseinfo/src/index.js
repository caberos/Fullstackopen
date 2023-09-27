import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <><h1>{props.course}</h1></>
  );
};

const Part = ({part})=>{
  return(
    <>
    <p>{part.name}{part.exercises}</p>
    </>
  );
};

const Content=({part})=>{
  return(
    <>
    <Part part={part[0]}/>
    <Part part={part[1]}/>
    <Part part={part[2]}/>
    </>
  );
};

const Total=({part})=>{
  return(
    <>
      <p>Number of exercises{' '}
      {part[0].exercises + part[1].exercises+part[2].exercises}
      </p>
    </>
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));