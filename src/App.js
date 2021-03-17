import './App.css';
import Search from './Search';
import Logo from './Logo';
import PostItNote from './PostItNote';
import Footer from './Footer';
import HomePage from './HomePage'
import FirebasePoems from './FirebasePoems';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';





function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <div className="App">
          <Route path="/" exact component={HomePage} />
        <Route path="/pastpoems" component={FirebasePoems} />
        </div>
      </div>
    </Router>
  );
}

export default App;
