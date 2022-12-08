import { memo, useState } from 'react';

const options = [
  { id: 'all', name: 'Tất cả' },
  { id: 'figure', name: 'Figure' },
  { id: 'clothes', name: 'Trang phục' },
];

const Search = () => {
  const [selectedOps, setSelectedOps] = useState(options[0]);

  return (
    <div className="flex items-center h-full">
      <div className="border p-2">
        <div>{selectedOps.name}</div>
      </div>
    </div>
  );
};

export default memo(Search);
