import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Repos from './pages/Repos'
import Error from './pages/Error'
import SingleRepo from './pages/SingleRepo'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Repos />} />
        <Route path='/:name' element={<SingleRepo />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
