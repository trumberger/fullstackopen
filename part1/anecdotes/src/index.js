import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const [top, setTop] = useState(0)

  const max = props.anecdotes.length

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1

    // Check if currently selected item is top voted item and if so setTop
    if (newVotes[selected] > newVotes[top]) {
      setTop(selected)
    }

    setVotes(newVotes)
  }

  const handleRandClick = () => {
    setSelected(getRandomInt(max))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <div>
        <Button onClick={handleVoteClick} text='vote' />
        <Button onClick={handleRandClick} text='next anecdote' />
      </div>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[top]}
      <p>has {votes[top]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
