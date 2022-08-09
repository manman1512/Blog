import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
