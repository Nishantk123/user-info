import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import User from './component/User';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <User />
    </div>
  );
}

export default App;
