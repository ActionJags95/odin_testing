import './Joke.css'

function Joke({joke}) {
  return (
    <>
      <div className='joke-body'>
        <h1 className='joke-setup'>Setup: {joke.setup}</h1>
        <p className='joke-punchline'>Punchline: {joke.punchline}</p>
      </div>
    </>
  )
}

export default Joke;