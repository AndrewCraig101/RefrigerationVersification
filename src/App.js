import './App.css';
import Poem from './Poem';
import Search from './Search';
import Logo from './Logo';
import PostItNote from './PostItNote';
import Footer from './Footer';




function App() {

  return (
    <body>
      <main className="refrigeration-versification">
        <section className="poems-container">
          <Logo />
          <div className="poems-content">
            {/* <Poem /> */}

            <Search />
          </div>
        </section>
        <section className="fridge-container">
          <div className="fridge-content">
            <PostItNote />
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default App;
