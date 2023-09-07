import './App.css';
import Layout from './components/Layout';
import TheTeam from './components/team';
import Product from './components/Product';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Home/>
      <Product/>
      <TheTeam/>
    </div>
  );
}

export default App;
