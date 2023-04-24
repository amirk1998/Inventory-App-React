import { useState } from 'react';

const ProductsForm = ({ categories, setProducts }) => {
  const [productData, setProductData] = useState({
    title: '',
    quantity: '',
    categoryID: '',
  });

  // const [products, setProducts] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductData({ title: '', quantity: '', categoryID: '' });
  };

  return (
    <div className='mb-6'>
      <h2 className='text-xl text-slate-300 font-bold mb-2'>Add New Product</h2>
      <div className='flex flex-col bg-slate-700 rounded-xl gap-y-4 p-2'>
        <form className='flex flex-col bg-slate-700 rounded-xl gap-y-4 p-2'>
          <div>
            <label
              htmlFor='product-title'
              className='block mb-1 text-slate-400'
            >
              title
            </label>
            <input
              name='title'
              type='text'
              value={productData.title}
              onChange={changeHandler}
              className='bg-transparent px-2 py-1 rounded-xl border-2 border-slate-500 text-slate-400 h-10 w-full md:w-auto outline-none focus:border-white'
              id='product-title'
              aria-label='product-title'
              placeholder='product title'
            />
          </div>
          <div>
            <label
              htmlFor='product-quantity'
              className='block mb-1 text-slate-400'
            >
              quantity
            </label>
            <input
              className='bg-transparent rounded-xl border-2 border-slate-500 text-slate-400 h-10 w-full px-2 md:w-auto appearance-none outline-none focus:border-white'
              type='number'
              name='quantity'
              value={productData.quantity}
              onChange={changeHandler}
              id='product-quantity'
              aria-label='product-quantity'
              min='1'
              step='1'
              placeholder='Enter a number (1 To ...)'
            />
          </div>
          <div>
            <label
              htmlFor='product-category'
              className='block mb-1 text-slate-400'
            >
              category
            </label>
            <select
              value={productData.categoryID}
              onChange={changeHandler}
              name='categoryID'
              id='product-category'
              className='form-select bg-transparent text-slate-400 rounded-xl w-full border-2 border-slate-500 h-10 p-2 block outline-none focus:border-white'
            >
              <option value='' disabled hidden>
                Select a category
              </option>

              {categories.map((category) => {
                return (
                  <option
                    className='bg-slate-500 text-slate-300 py-2'
                    key={category.id}
                    value={category.id}
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <button
              id='add-new-product'
              onClick={addNewProductHandler}
              className='flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 hover:bg-slate-300 hover:text-slate-500'
            >
              Add new Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductsForm;
