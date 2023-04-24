const ProductsForm = () => {
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
              className='bg-transparent px-2 py-1 rounded-xl border-2 border-slate-500 text-slate-400 h-10 w-full md:w-auto outline-none focus:border-white'
              type='text'
              name='product-title'
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
              name='product-quantity'
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
              defaultValue=''
              name='product-category'
              id='product-category'
              className='form-select bg-transparent text-slate-400 rounded-xl w-full border-2 border-slate-500 h-10 p-2  block outline-none focus:border-white'
            >
              <option value='' disabled hidden>
                Select a category
              </option>
              <option className='bg-slate-500 text-slate-300' value='backend'>
                backend
              </option>
              <option className='bg-slate-500 text-slate-300' value='frontend'>
                frontend
              </option>
              <option className='bg-slate-500 text-slate-300' value='ios'>
                ios
              </option>
            </select>
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <button
              id='add-new-product'
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
