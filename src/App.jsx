import Home from "./pages/home.jsx";
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
}
