import './App.css'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element = {<Main />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
