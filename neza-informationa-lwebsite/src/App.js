// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import TheTeam from './components/team';
import Role from './components/NgoRoles';
import Slideshow from './components/Slideshow';
import Home from './components/Home'
import Product from './components/Product';

function App() {
  return (
    <div className='App'>
      <Layout>
      <Home/>
      <Product/>
       <Slideshow/>
      <Role/>
      <TheTeam/>
    </Layout>
    </div>
   
  );
}

export default App;
