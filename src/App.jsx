import CategoryForm from './Components/Category/Category';
import Navbar from './Components/Navbar/Navbar';
import ProductsForm from './Components/Products/Products';

function App() {
  return (
    <div className='App bg-slate-800 min-h-screen w-full'>
      <Navbar />
      {/* App Content */}
      <div className='container max-w-screen-sm mx-auto p-4'>
        <CategoryForm />
        <ProductsForm />
      </div>
    </div>
  );
}

export default App;
