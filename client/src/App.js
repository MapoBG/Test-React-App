import style from './App.module.css';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <div className={style.Container}>
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
