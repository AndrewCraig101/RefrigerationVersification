import './App.css';
import Poem from './Poem';
import Search from './Search';
import Logo from './Logo';




function App() {

  return (
    <main className="refrigeration-versification">
      <section className="poems-container">
        <Logo/>
        <div className="poems-content">
          {/* <Poem /> */}

          <Search />
        </div>
      </section>
      <section className="fridge-container">
        <div className="fridge-content">
        </div>
      </section>
    </main>
  );
}

export default App;
