import Header from './components/Header'
import JournalEntry from './components/JournalEntry'

function App() {
  let mountFuji = {
    src: "/images/mount-fuji.jpg",
    info: "This is mount fuji",
    date: "21 Jan,2024 - 31 Jan,2024",
    maplink: "#",
    country:"Japan",
    location: "Mount Fuji"
  }
  return (
    <>
      <Header />
      <JournalEntry location={mountFuji}/>
      <JournalEntry location={mountFuji}/>
    </>
  )
}

export default App;