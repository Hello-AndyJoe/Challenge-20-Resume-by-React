import Hero from './components/Hero';
import Header from './components/Header';
import Bio from './components/Bio';
import ResumeMain from './components/ResumeMain';
import Project from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/reset.css'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Bio />
      <ResumeMain />
      <Project />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;
