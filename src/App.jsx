import { useEffect, useState } from 'react';
import CategoryForm from './Components/Category/Category';
import Navbar from './Components/Navbar/Navbar';
import ProductsForm from './Components/Products/Products';
import ProductsList from './Components/Products/ProductsList';
import Filter from './Components/Filter/Filter';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState('latest');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, sort, searchValue]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      // return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      if (sort === 'latest') {
        return new Date(a.updatedAt) > new Date(b.updatedAt) ? 1 : -1;
      } else if (sort === 'earliest') {
        return new Date(a.updatedAt) > new Date(b.updatedAt) ? -1 : 1;
      }
    });
  };

  return (
    <div className='App bg-slate-800 min-h-screen w-full'>
      <Navbar />
      {/* App Content */}
      <div className='container max-w-screen-sm mx-auto p-4'>
        <CategoryForm setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <h2 className='text-xl text-slate-300 font-bold mb-2'>Products List</h2>
        <Filter
          sort={sort}
          searchValue={searchValue}
          onSort={sortHandler}
          onSearch={searchHandler}
        />
        <ProductsList
          products={filteredProducts}
          setProducts={setProducts}
          categories={categories}
        />
      </div>
    </div>
  );
}

export default App;
