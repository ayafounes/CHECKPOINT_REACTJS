import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar';  
import Card1Comp from './components/card1';
import Card2Comp from './components/card2';
import Card3Comp from './components/card3';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <div className="card-container">
        <Card1Comp />
        <Card2Comp />
        <Card3Comp/>
      </div>
    </div>
  );
}

export default App;

