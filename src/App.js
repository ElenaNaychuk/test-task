import ProductsList from './components/ProductsList/ProductsList';
import products from './productsData.json';

function App() {
  return (
    <>
      <ProductsList products={products} />
    </>
  );
}

export default App;
