const ProductsList = ({ products, categories }) => {
  const options = { hour: '2-digit', minute: '2-digit', hour12: false };

  const findCategory = (categoryID) => {
    return categories.find((item) => item.id === parseInt(categoryID)).title;
  };
  return (
    <div className='flex flex-col gap-y-2'>
      {products.map((product) => {
        return (
          <div className='flex items-center justify-between' key={product.id}>
            <p className='text-base text-slate-300 font-bold '>
              {product.title}
            </p>
            <div className='flex items-center justify-center gap-x-3'>
              <p className='text-base text-slate-300 font-bold '>
                {new Date(product.createdAt).toLocaleDateString('en-US')}
              </p>
              <p className='text-base text-slate-300 font-bold '>
                {new Date(product.createdAt).toLocaleTimeString(
                  'en-US',
                  options
                )}
              </p>
              <p className='text-sm text-slate-400 font-bold block px-3 py-0.5 border border-slate-400 rounded-2xl w-32 text-center '>
                {findCategory(product.categoryID)}
              </p>
              <span className='flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300 text-sm'>
                {product.quantity}
              </span>

              <button
                className=' delete-product text-base border border-red-400 px-2 py-0.5 rounded-2xl text-red-400 hover:text-red-600 hover:border-red-600 font-bold'
                aria-label='delete-product'
                data-product-id={product.id}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
