const Filter = ({
  sort,
  searchValue,
  onSort,
  onSearch,
  categories,
  onSelectCategory,
}) => {
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

      <div className='flex items-center justify-between'>
        {/* Sort By */}
        <div className='flex items-center justify-between mb-6'>
          <label htmlFor='sort-by' className='text-slate-500 text-lg mr-4'>
            Sort By
          </label>
          <select
            name='sort-by'
            id='sort-by'
            value={sort.sortBy}
            onChange={onSort}
            className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-32'
          >
            <option className='bg-slate-500 text-slate-300' value='date'>
              Date
            </option>
            <option className='bg-slate-500 text-slate-300' value='category'>
              Category
            </option>
          </select>
        </div>

        {/* Sort Order */}
        {sort.sortBy === 'date' && (
          <div className='flex items-center justify-between mb-6'>
            <label htmlFor='sort-order' className='text-slate-500 text-lg mr-4'>
              Sort Order
            </label>
            <select
              name='sort-order'
              id='sort-order'
              value={sort.sortOrder}
              onChange={onSort}
              className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-36'
            >
              <option className='bg-slate-500 text-slate-300' value='latest'>
                Latest
              </option>
              <option className='bg-slate-500 text-slate-300' value='earliest'>
                Earliest
              </option>
            </select>
          </div>
        )}

        {/* Category */}
        {sort.sortBy === 'category' && (
          <div className='flex items-center justify-between mb-6 '>
            <label htmlFor='category' className='text-slate-500 text-lg mr-4'>
              Category
            </label>
            <select
              name='category'
              id='category'
              value={sort.category}
              onChange={onSelectCategory}
              className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-36'
            >
              <option className='bg-slate-500 text-slate-300' value='all'>
                All
              </option>

              {categories.map((category) => {
                return (
                  <option
                    className='bg-slate-500 text-slate-300'
                    value={category.id}
                    key={category.id}
                  >
                    {category.title}
                  </option>
                );
              })}

              {/* <option className='bg-slate-500 text-slate-300' value='clothing'>
                Clothing
              </option>
              <option
                className='bg-slate-500 text-slate-300'
                value='electronics'
              >
                Electronics
              </option>
              <option className='bg-slate-500 text-slate-300' value='home'>
                Home
              </option> */}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;

// ___________________________________________________________________________________________
// const Filter = ({ sort, searchValue, onSort, onSearch, categories }) => {
//   const handleSortChange = (event) => {
//     const selectedSort = event.target.value;
//     onSort(selectedSort);
//   };

//   return (
//     <div>
//       {/* Search */}
//       <div className='flex items-center justify-between mb-6 w-full'>
//         <label htmlFor='search-input' className='text-slate-500 text-lg'>
//           Search
//         </label>
//         <input
//           type='text'
//           name='search-input'
//           id='search-input'
//           value={searchValue}
//           onChange={onSearch}
//           className='block bg-transparent h-10 pl-3 rounded-xl border-2 border-slate-500 text-slate-400'
//           placeholder='Search Product ... '
//         />
//       </div>
//       {/* Sort */}
//       <div className='flex items-center justify-between mb-6'>
//         <label htmlFor='sort-by' className='text-slate-500 text-lg'>
//           Sort By
//         </label>
//         <select
//           name='sort-by'
//           id='sort-by'
//           value={sort.sortBy}
//           onChange={handleSortChange}
//           className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-32'
//         >
//           <option value='date'>Date</option>
//           <option value='category'>Category</option>
//         </select>
//         <select
//           name='sort-order'
//           id='sort-order'
//           value={sort.sortOrder}
//           onChange={handleSortChange}
//           className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-32'
//           disabled={!sort.sortBy}
//         >
//           {sort.sortBy === 'date' ? (
//             <>
//               <option value='earliest'>Earliest</option>
//               <option value='latest'>Latest</option>
//             </>
//           ) : (
//             // Render the categories options based on your app's state
//             // This code assumes you have an array of category names in your app's state
//             // You can replace it with your own implementation
//             categories.map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))
//           )}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Filter;

// __________________________________________________________________________________________
// const Filter = ({ sort, searchValue, onSort, onSearch }) => {
//   return (
//     <div>
//       {/* Search */}
//       <div className='flex items-center justify-between mb-6 w-full'>
//         <label htmlFor='search-input' className='text-slate-500 text-lg'>
//           Search
//         </label>
//         <input
//           type='text'
//           name='search-input'
//           id='search-input'
//           value={searchValue}
//           onChange={onSearch}
//           className='block bg-transparent h-10 pl-3 rounded-xl border-2 border-slate-500 text-slate-400'
//           placeholder='Search Product ... '
//         />
//       </div>
//       {/* Sort */}
//       <div className='flex items-center justify-between mb-6'>
//         <label htmlFor='sort-products' className='text-slate-500 text-lg'>
//           Sort
//         </label>

//         <select
//           name='sort-products'
//           id='sort-products'
//           value={sort}
//           onChange={onSort}
//           className='form-select bg-transparent text-slate-400 rounded-xl border border-slate-500 h-10 px-2 appearance-none w-32'
//         >
//           <option className='bg-slate-500 text-slate-300' value='latest'>
//             latest
//           </option>
//           <option className='bg-slate-500 text-slate-300' value='earliest'>
//             earliest
//           </option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Filter;
