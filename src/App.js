
import './App.css';
import { AppBarMovil } from './components/AppBarMovil';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout';
import { ReadMore } from './components/ReadMore';
import { BoxContainer } from './components/BoxContainer';
import CvPage from './components/CvPage';
import Project from './components/Project';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={  <BoxContainer  /> }/>
        <Route path="/cv" element={<CvPage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path=":id" element={<ReadMore />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
