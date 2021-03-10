import React from 'react';

const Course = ({ courses }) => {
    return (
      <div>
        {courses.map(course =>
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )}
      </div>
    )
  }

const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <Part parts={parts} />
    )
  }

  const Part = ({ parts }) => {
    return (
      <>
        {parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        )}
      </>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => {
      console.log('what is happening', s, p)
      return s + p.exercises
    }, 0)
    return(
      <p><b>total of {total} exercises</b></p>
    ) 
  }

  export default Course
  
 