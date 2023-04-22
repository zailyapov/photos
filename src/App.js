import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/componentb/:id" element={<ComponentB />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
