import { useState } from 'react';
import CategoryForm from './Components/Category/Category';
import Navbar from './Components/Navbar/Navbar';
import ProductsForm from './Components/Products/Products';
import ProductsList from './Components/Products/ProductsList';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className='App bg-slate-800 min-h-screen w-full'>
      <Navbar />
      {/* App Content */}
      <div className='container max-w-screen-sm mx-auto p-4'>
        <CategoryForm setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <ProductsList products={products} categories={categories} />
      </div>
    </div>
  );
}

export default App;
