import './App.css';
import ProductsList from './components/ProductsList/ProductsList';
import products from './productsData.json'

function App() {
  return (
    <div className="App">
      <ProductsList products={products} />
    </div>
  );
}

export default App;
