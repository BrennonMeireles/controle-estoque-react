import Header  from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Main    from "../../components/Main"

import './style.css'

function Home() {
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
export default Home
