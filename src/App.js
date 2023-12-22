import logo from './logo.svg';
import './App.css';
import AIQuery from './components/AIQuery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a prompt for Google Gemini AI and submit it to recieve an answer.
        </p>
        <p> </p>
        <div>
          <AIQuery/>
        </div>
      </header>
    </div>
  );
}

export default App;
