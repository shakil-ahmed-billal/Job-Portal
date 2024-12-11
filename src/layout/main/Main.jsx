import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Main = () => {
  return (
    <div>
      <header>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="min-h-[calc(100vh-288px)]">
            <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Main
