// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Index1 from './pages/Index1';
import Index2 from './pages/Index2';
import Index3 from './pages/Index3';
import Index4 from './pages/Index4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index1" element={<Index1 />} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/index3" element={<Index3 />} />
        <Route path="/index4" element={<Index4 />} />
      </Routes>
    </Router>
  );
}

export default App;
