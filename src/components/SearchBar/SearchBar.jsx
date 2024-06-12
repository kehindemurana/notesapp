import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='flex items-center px-4 rounded-md w-80 bg-slate-100'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search Notes'
        className='w-full text-xs bg-transparent py-[11px] outline-none'
      />
      {value && (
        <IoMdClose
          className='mr-3 cursor-pointer text-slate-600 hover:text-black'
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className='mr-3 cursor-pointer text-slate-600 hover:text-black'
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
