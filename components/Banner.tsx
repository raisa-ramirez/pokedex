import Image from 'next/image';
import SearchBar from './SearchBar';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-100">
      <div className="flex justify-center p-10 md:p-20">
        <Image
          src="/pokemon.svg"
          width={300}
          height={20}
          alt="Logo"
          className="object-contain"
        />
      </div>
      <div className="flex justify-center p-10 md:p-20">
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
