import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';
import AboutPage from './pages/aboutPage/AboutPage';
import contactsPage from './pages/contactsPage/contactsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<contactsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
