import { useState } from "react";

function Panel({title, children, isActive, changeActive}) {
  return (
    <>
      <h2>{title}</h2>
      {isActive && <p>{children}</p>}
      {!isActive && <button onClick={changeActive}>Show</button>}
    </>
  )
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeActiveIndex = (index) => {
    setActiveIndex(index);
  }
  return(
    <>
      <Panel title={"About"} isActive={activeIndex === 0} changeActive={() => changeActiveIndex(0)}>
        This is the about section of the paragraph
      </Panel>
      <Panel title={"Etymology"} isActive={activeIndex === 1} changeActive={() => changeActiveIndex(1)}>
        This is the Etymology Section
      </Panel>
    </>
  )
}

export default Accordion;