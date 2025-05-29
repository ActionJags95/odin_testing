import './Arrays.css'

function Array() {
  const array = ["Jags", "Pillamari", "Hello", "Hola"];

  let render = array.map((item, index) => {
    return <h1 key={index}>{item}</h1> // Rendering arrays as h1 elements
  })

  return(
    <>
      {render}
    </>
  )
}

export default Array;