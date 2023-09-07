// import logo from './logo.svg';
import './App.css';
import TheTeam from './components/team';
import Role from './components/NgoRoles';
import Slideshow from './components/Slideshow';
import Home from './components/home'

function App() {
  return (
    <div className='App'>
      <Home/>
       <Slideshow/>
      <Role/>
      <TheTeam/>
    </div>
  );
}

export default App;
