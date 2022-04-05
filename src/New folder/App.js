import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Headers from './Components/Header/Headers';
import Reviews from './Components/Reviews/Reviews';

function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
      <Headers></Headers>
      <Reviews></Reviews>

    </div >
  );
}

export default App;
