
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import AddPost from './pages/AddPost'
import Home from './pages/Home'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addpost">Add Post</Link></li>
          <li>
            <NavLink 
              to="/addpost"
              className={({isActive}) => (isActive ? "active-link" : "")}
            >
              Add Post
            </NavLink>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <h3>RODAPÉ</h3>
    </>
  )
}

export default App