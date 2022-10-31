import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Users />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
