import "./responseContent.css"

function ResponseContent(props) {
  let items = props.items;
  // console.log(items);
  function getElems() {
    console.log(items);
  }
  return (
    <>
      {/* <button onClick={getElems}>click</button> */}
    </>
  )
}

export default ResponseContent;