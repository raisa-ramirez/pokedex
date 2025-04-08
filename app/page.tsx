import AppProviderWrapper from '@/components/AppProviderWrapper';
import { PokemonCard, Banner } from '@/components';

export default function Home() {
  return (
    <AppProviderWrapper>
      <Banner />
      <div className="bg-gray-100">
        <PokemonCard />
      </div>
    </AppProviderWrapper>
  );
}
