
import './App.css';
import Filtro from './components/Filter';
import ProfilePage from './components/ProfilePage';
import ItemList from './components/items'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';





function App() {
  return (
    <>
      <Router>

        
        <Routes>
          <Route exact path="/ProfilePage" element={<ProfilePage />} />

          <Route path="/Filter" element={<Filtro />} />

          <Route path="/items" element={<ItemList />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

