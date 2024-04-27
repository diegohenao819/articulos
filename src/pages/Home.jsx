import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/articulos">
        <button>Articulos</button>
      </Link>
    </>
  )
}

export default Home