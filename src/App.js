import { Fragment } from 'react';
import './App.scss';
import Header from './components/header';
import HomePage from './views/home_page';
import Menu from './components/menu';
import Footer from './components/footer';
import Gallery from './components/gallery';

function App() {
  return (
    <Fragment >
      < Header />

      <main>
        <section className='content-principal'>
        <Menu/>  
        <HomePage />
        </section>
        <section>

        </section>
      </main>

      <Footer />
    </Fragment>

  );
}

export default App;
