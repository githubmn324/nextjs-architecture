'use client';

import { BsSearch } from 'react-icons/bs';

interface Props {
  city: string;
  onChangeCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchWeather: () => void;
}

const SearchBar = ({ city, onSearchWeather, onChangeCity }: Props) => {
  return (
    <div className="relative z-10 m-auto flex w-full max-w-[500px] items-center justify-between pt-4 text-white">
      <form
        onSubmit={onSearchWeather}
        className="m-auto flex w-full items-center justify-between rounded-2xl border border-gray-300 bg-transparent p-3 text-white"
      >
        <div>
          <input
            value={city}
            onChange={(e) => onChangeCity(e)}
            className="border-none bg-transparent text-2xl text-white focus:outline-none"
            type="text"
            placeholder="Search city"
          />
        </div>
        <button
          className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-300"
          onClick={onSearchWeather}
        >
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
