import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import Recipe from './components/Recipe';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<Recipe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
