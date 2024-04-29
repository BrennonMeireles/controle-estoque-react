import Header  from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Main_search from "../../components/Main_search"  
import './style.css'


function Search() {
  return (
    <div>
        <Header />
        <section>
          <Sidebar />
          <Main_search  />
        </section>
    </div>
  )
}
export default Search