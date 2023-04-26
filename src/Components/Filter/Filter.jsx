const Filter = ({ sort, searchValue, onSort, onSearch }) => {
  return (
    <div>
      {/* Search */}
      <div className='flex items-center justify-between mb-6 w-full'>
        <label htmlFor='search-input' className='text-slate-500 text-lg'>
          Search
        </label>
        <input
          type='text'
          name='search-input'
          id='search-input'
          value={searchValue}
          onChange={onSearch}
          className='block bg-transparent h-10 pl-3 rounded-xl border-2 border-slate-500 text-slate-400'
          placeholder='Search Product ... '
        />
      </div>
      {/* Sort */}
      <div className='flex items-center justify-between mb-6'>
        <label htmlFor='sort-products' className='text-slate-500 text-lg'>
          Sort
        </label>
        <select
          name='sort-products'
          id='sort-products'
          value={sort}
          onChange={onSort}
          className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-32'
        >
          <option className='bg-slate-500 text-slate-300' value='latest'>
            latest
          </option>
          <option className='bg-slate-500 text-slate-300' value='earliest'>
            earliest
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
