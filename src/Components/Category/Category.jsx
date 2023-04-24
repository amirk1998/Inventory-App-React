const CategoryForm = () => {
  return (
    <section>
      <div className='mb-6 hidden' id='category-wrapper'>
        <h2 className='text-xl text-slate-300 font-bold mb-2'>
          Add New category
        </h2>
        <form className='flex flex-col bg-slate-700 rounded-xl gap-y-4 p-4'>
          <div className='flex flex-col'>
            <label
              htmlFor='category-title'
              className='block mb-1 text-slate-400'
            >
              title
            </label>
            <input
              className='bg-transparent rounded-xl border-2 border-slate-500 text-slate-400 h-10 w-full md:w-auto px-2 outline-none focus:border-white'
              type='text'
              name='category-title'
              id='category-title'
              aria-label='category-title'
            />
            <span
              id='category-title-error'
              className='text-red-500 px-2 py-0.5 hidden'
            >
              Please enter title correctly.
            </span>
          </div>
          <div>
            <label
              htmlFor='category-description'
              className='block mb-1 text-slate-400'
            >
              description
            </label>
            <textarea
              className='bg-transparent rounded-xl px-2 py-1 border-2 border-slate-500 text-slate-400 h-16 w-full resize-none outline-none focus:border-white'
              type=' text'
              name='category-description'
              id='category-description'
            ></textarea>
            <span
              id='category-description-error'
              className='text-red-500 px-2 py-0.5 hidden'
            >
              Please enter description correctly.
            </span>
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <button
              className='flex-1 border border-slate-400 text-slate-400 rounded-xl py-2'
              id='cancel-add-category'
            >
              Cancel
            </button>
            <button
              id='add-new-category'
              className='flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 hover:bg-slate-400 hover:text-slate-500'
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id='toggle-add-category'
        className='text-slate-600 text-lg mb-4 font-medium hover:text-slate-400'
      >
        Add new Category?
      </button>
    </section>
  );
};

export default CategoryForm;
