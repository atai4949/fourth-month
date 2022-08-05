import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';
import AboutPage from './pages/aboutPage/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
