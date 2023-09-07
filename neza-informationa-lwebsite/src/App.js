import './App.css';
import Layout from './components/Layout';
import TheTeam from './components/team';
import Product from './components/Product';
import Home from './components/home';

function App() {
  return (
    <Layout>

      <Home/>
      <Product/>
      <TheTeam/>
    </Layout>
   
  );
}

export default App;
