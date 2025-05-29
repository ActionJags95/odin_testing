import jokes from  './data'
import Joke from './Joke'

function Render() {
  const jokeElems = jokes.map((joke,index) => {
    return <Joke key={index} joke={joke}/> // rendering custom components with the required data
    // jokeElems stores the components with the required props
  })

  return (
    <div>
      {jokeElems}
    </div>
  )
}

export default Render;