import Particle from './components/particle';
import './App.css';
import Hangman from './components/Hangman';
import Tictactoe from './components/Tictactoe';
import Flames from './components/Flames'
function App() {
  return (
    <div className="App">
      <Particle/>
      <main>
        <Hangman />
        <Tictactoe/>
        <Flames />
      </main>
      
      
    </div>
  );
}

export default App;
