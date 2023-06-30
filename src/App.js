import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
  <Layout>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    
      </Layout>
    </BrowserRouter>
  );
}

export default App;
