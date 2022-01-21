import './App.css';
import Header from './Components/Header' 
import Footer from './Components/Footer'
import Main from './Components/Main'
import Gallery from './Components/Gallery'
import Testimony from './Components/Testimonals'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Testimony />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
