import './App.css';
import HomePage from './HomePage'
import FirebasePoems from './FirebasePoems';
import { BrowserRouter as Router, Route } from 'react-router-dom';





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
