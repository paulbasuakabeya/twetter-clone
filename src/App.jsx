import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
// // import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Editor from "./components/Editor.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      {/* <Header />
      <Editor />
      <Footer /> */}
      <Home />
    </Layout>
  );
}
