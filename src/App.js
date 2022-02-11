import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header';
import User from './component/User';
import Login from './component/Login';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path={"/"} component={Home} />
      <Route exact path="/user" component={User}/>
      <Route exact path="/login" component={ Login }  />
    </div>
    </Router>
  );
}

export default App;
