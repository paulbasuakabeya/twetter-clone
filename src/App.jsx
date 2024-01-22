
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
import Home from './pages/home.jsx';
import Profile from "./pages/profile.jsx";
import Rightsdebar from "./right-sidebar/right-sibar.jsx";
import NavBar from "./sidebar-left/nav-bar/nav-bar.jsx";
import('./style/reset.css');
import('./style/App.css');
import('./style/siderbar.css');
function App() {
  return (
    <Router>
      <div className="sidebar">
        < NavBar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <div className="right-sidebar">
        <Rightsdebar />
      </div>

    </Router>)
}

export default App;
