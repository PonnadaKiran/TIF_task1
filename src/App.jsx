import "./App.css";
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Cards from './components/cards'

function App() {
  return (
    <div className='home'>
      <Header/>
      <About/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
