import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/reset.css'

function App() {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;
