import Header from './components/Header'
import JournalEntry from './components/JournalEntry'
import Contact from './components/Contact'

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
    </>
  )
}

export default App;