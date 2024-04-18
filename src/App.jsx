import Header from "../public/components/Header"
import Sidebar from "../public/components/Sidebar"
import Main from "../public/components/Main"


import './App.css'

function App() {
  return (
    <div>
        <Header />
        <section>
          <Sidebar />
          <Main />
        </section>
    </div>
  )
}
export default App
