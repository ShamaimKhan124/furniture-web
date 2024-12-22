import { useState } from 'react';
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="flex items-center w-full max-w-md mx-auto bg-white  shadow-lg rounded-lg overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 text-2xl text-black font-semibold hover:bg-yellow-600 focus:outline-none"
      >
        <LuSearch />
      </button>
    </form>
  );
}
