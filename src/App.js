import './App.css';
import Header from './components/Header';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Biographies from './components/Biographies';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Manifesto />
      <Services />
      <Biographies />
      <Contacts />
    </div>
  );
}

export default App;
