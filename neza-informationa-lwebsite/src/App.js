// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import TheTeam from './components/team';
import Role from './components/NgoRoles';
import Slideshow from './components/Slideshow';
import Home from './components/home'

function App() {
  return (
    <div className='App'>
      <Layout>
      <Home/>
       <Slideshow/>
      <Role/>
      <TheTeam/>
    </Layout>
    </div>
   
  );
}

export default App;
