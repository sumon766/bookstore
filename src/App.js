import {
  BrowserRouter, Outlet, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <BrowserRouter>
          <Header />
          <Outlet />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
