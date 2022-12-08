import { memo, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');

  const handleClickSearch = () => {
    console.log(keyword);
  };

  return (
    <div className="flex-grow flex items-center">
      <input
        type="search"
        className="w-full px-4 py-1 outline-none border rounded-tl-md rounded-bl-md focus:border-main effect"
        placeholder="Tìm kiếm sản phẩm . . ."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div
        className="px-2 py-1 text-24 bg-main border border-main text-white rounded-tr-md rounded-br-md"
        onClick={handleClickSearch}
      >
        <IoSearchSharp />
      </div>
    </div>
  );
};

export default memo(SearchInput);
