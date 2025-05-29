import Header from './components/Header'
import JournalEntry from './components/JournalEntry'
import Contact from './components/Contact'
import Array from './components/Arrays'
import Render from './components/Render'

function App() {
  let mountFuji = {
    src: "/images/mount-fuji.jpg",
    info: "This is mount fuji",
    date: "21 Jan,2024 - 31 Jan,2024",
    maplink: "#",
    country:"Japan",
    location: "Mount Fuji"
  }
  let number = 2;
  return (
    <>
      <Header />
      <JournalEntry loc={mountFuji}/>
      <JournalEntry loc={mountFuji} number={number}/>
      <Contact />
      <Contact />
      <Array />
      <Render />
    </>
  )
}

export default App;