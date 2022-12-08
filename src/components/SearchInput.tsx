import { memo, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (!keyword) return;

    navigate(`/tim-kiem?k=${keyword}`);
  };

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    if (!keyword) return;

    navigate(`/tim-kiem?k=${keyword}`);
  };

  return (
    <div className="flex-grow flex items-center">
      <input
        type="search"
        className="w-full px-4 py-1 outline-none border rounded-tl-md rounded-bl-md focus:border-main effect"
        placeholder="Tìm kiếm sản phẩm . . ."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <div
        className="px-2 py-1 text-24 bg-main border border-main text-white rounded-tr-md rounded-br-md"
        onClick={handleSearch}
      >
        <IoSearchSharp />
      </div>
    </div>
  );
};

export default memo(SearchInput);
