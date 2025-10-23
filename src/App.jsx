import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'

const App = () => {
  return (
    <>
      <header className='bg-red-500 text-white p-6'>
        <nav className={`flex justify-center gap-4`}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contacts'>Contacts</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}
export default App
