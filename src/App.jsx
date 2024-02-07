
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
import Home from './pages/home.jsx';
import Profile from "./pages/profile.jsx";
import NavBar from "./sidebar-left/nav-bar/nav-bar.jsx";
import RightsiderPg from "./right-sidebar/right siderPg.jsx";
import('./style/reset.css');
import('./style/App.css');
import('./style/siderbar.css');
function App() {
  return (
    <Router>
      {/* <div className="sidebar grid justify-items-start text-center">
        
      </div> */}
      < NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <RightsiderPg/>

    </Router>)
}

export default App;
