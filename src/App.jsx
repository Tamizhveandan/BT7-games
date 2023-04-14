import Particle from './components/particle';
import './App.css';
import Hangman from './components/Hangman';
import Tictactoe from './components/Tictactoe';
import Flames from './components/Flames'
import Footer from './components/Footer';
import Coming from './components/Coming';
function App() {
  return (
    <div className="App">
      <Particle/>
      <div className='head'>BANGTANGAMES</div>
      <main>
        <Hangman />
        <Tictactoe/>
        <Flames />
        <Coming />
      </main>
        <Footer/>
      
      
    </div>
  );
}

export default App;
