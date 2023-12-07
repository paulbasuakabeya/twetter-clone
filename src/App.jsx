/*import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Accueil from "./pages/accueil.jsx";
import Profile from "./pages/profile.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Accueil />
      <Home />
      <Profile />
    </Layout>
  );
}*/
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
import Home from './pages/home.jsx';
import Profile from "./pages/profile.jsx";
import Rightsdebar from "./right-sidebar/right-sibar.jsx";
import NavBar from "./sidebar-left/nav-bar/nav-bar.jsx";
import('./style/reset.css');
import('./style/App.css');
function App() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        < NavBar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Rightsdebar />

    </BrowserRouter>)
}

export default App;
