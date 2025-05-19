import './Joke.css'

function Joke({joke}) {
  return (
    <>
      <div>
        <h1>{joke} is a Joke!</h1>
        <p>Hahaha...!</p>
      </div>
    </>
  )
}

export default Joke;