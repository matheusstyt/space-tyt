import { Fragment } from 'react';
import './App.scss';
import Header from './components/header';
import HomePage from './views/home_page';
import Menu from './components/menu';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Populares from './components/populares';

function App() {
  return (
    <Fragment >
      < Header />

      <main>
        <section className='content-principal'>
        <Menu/>  
        <HomePage />
        <Populares />
        </section>
      </main>

      <Footer />
    </Fragment>

  );
}

export default App;
