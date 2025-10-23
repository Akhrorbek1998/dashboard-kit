import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className='bg-blue-500 text-white p-6'>
        <nav className={`flex justify-center gap-4 items-center`}>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/contacts')}>Contacts</button>
          <button className='px-5 py-2 bg-red-500 text-white rounded-md'>Login</button>
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
