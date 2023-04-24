import { useState } from 'react';

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);

  const [categoryFormData, setCategoryFormData] = useState({
    title: '',
    description: '',
  });

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({
      ...categoryFormData,
      [name]: value,
      id: Date.now(),
    });
    console.log(name);
  };

  return (
    <section>
      <div
        className={isShow ? 'mb-6 flex flex-col' : 'mb-6 hidden'}
        id='category-wrapper'
      >
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
              name='title'
              id='category-title'
              aria-label='category-title'
              value={categoryFormData.title}
              onChange={changeHandler}
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
              name='description'
              id='category-description'
              value={categoryFormData.description}
              onChange={changeHandler}
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
              onClick={cancelFormHandler}
              className='flex-1 border border-slate-400 text-slate-400 rounded-xl py-2 hover:border-slate-100 hover:text-slate-500 hover:bg-slate-300'
              id='cancel-add-category'
            >
              Cancel
            </button>
            <button
              id='add-new-category'
              className='flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 hover:bg-slate-300 hover:text-slate-700'
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id='toggle-add-category'
        onClick={() => setIsShow((prevState) => !prevState)}
        className={
          !isShow
            ? 'text-slate-600 text-lg mb-4 font-medium hover:text-slate-400'
            : 'hidden'
        }
      >
        Add new Category?
      </button>
    </section>
  );
};

export default CategoryForm;
